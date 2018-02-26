<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>{{headerText}}</h1>
      <input v-show="loaded" class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo">
    </header>
    <!-- main section -->
    <section class="main" v-show="todos.length">
      <input class="toggle-all" id="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll({ done: !allChecked })">
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <todo v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"></todo>
      </ul>
    </section>
    <!-- footer -->
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :class="{ selected: visibility === key }"
            @click="visibility = key">{{ key | capitalize }}</a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearCompleted">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Todo from './Todo.vue'

export default {
  components: { Todo },
  data () {
    return {
      loaded: false,
      visibility: 'all'
    }
  },
  computed: {
    ...mapGetters([
      'todos',
      'filters',
      'remaining',
      'allChecked'
    ]),
    headerText () {
      return this.loaded ? 'todos' : 'Loading'
    },
    filteredTodos () {
      return this.$store.getters.filteredTodos(this.visibility)
    }
  },
  mounted () {
    this.$store.dispatch('getStorageItems').then(() => {
      this.loaded = true
    })
  },
  methods: {
    addTodo (e) {
      if (!this.loaded) return

      var text = e.target.value
      if (text.trim()) {
        this.$store.commit('addTodo', { text })
      }
      e.target.value = ''
    },
    ...mapMutations([
      'toggleAll',
      'clearCompleted'
    ])
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>

<style src="todomvc-app-css/index.css"></style>
<style lang="less">
.todoapp{
  .header,
  .footer{
    user-select: none;
  }
}
</style>
