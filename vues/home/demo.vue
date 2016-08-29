<template>
    <div class="demo">
        <demo></demo>
    </div>
</template>

<script>
import Demo from 'components/demo'
export default {
    data () {
        return {
            title: 'demo'
        }
    },
    components: {
        Demo
    }
}
</script>

<style lang="less">
.demo{
    /* some less */
}
</style>
