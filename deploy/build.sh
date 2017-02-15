#!/bin/sh

# ====================================================
# pushtest时的操作：
# 1、进入cli目录
# 2、执行编译
# 3、编译最终的目的是在server/app产出编译之后的文件
# 完成编译
# ====================================================
mod="grace_boilerplate"

# 编译当前代码
npm run build

# 加戳
cd ../../build/
gulp build --env=production --mod=${mod}

exit $?