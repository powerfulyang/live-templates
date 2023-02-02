# Live Templates

正确使用 WebStorm 的 Live Templates 可以大大提高开发效率。

## 变量

+ 按文件名生成大驼峰变量名，起名 $TM_FILENAME_BASE$
  `capitalize(camelCase(fileNameWithoutExtension()))`  
    example: `hello-world.js` => `HelloWorld`
    example: `HelloWorld.js` => `HelloWorld`
+ 读取剪切板内容，并按空格分割，生成 ProTable 的 columns, 起名 $COLUMNS$
  `groovyScript("def str = _1;def labels = str.split(' ').findAll { it != ''};def mappedLabels = labels.collect { it -> \"{\\ntitle: '${it}',\\ndataIndex: ''\\n}\\n\" };def joinedLabels = mappedLabels.join(',\\n');def columns = \"[\\n${joinedLabels}\\n]\";def result = \"const columns: ProColumnDetectType<any>[] = ${columns};\";return result;", clipboard())`

