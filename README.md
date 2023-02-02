# Live Templates

正确使用 WebStorm 的 Live Templates 可以大大提高开发效率。

## 有用的变量

+ [`$TM_FILENAME_BASE$`](./variables/$TM_FILENAME_BASE$): 按文件名生成大驼峰变量名  
  example: `hello-world.js` => `HelloWorld`  
  example: `HelloWorld.js` => `HelloWorld`
+ [`$COLUMNS$`](./variables/$COLUMNS$): 读取剪切板内容，并按空格分割，生成 ProTable 的 columns  
  example: `id name age` =>
  ```tsx
  const columns: ProColumnDetectType<any>[] = [
    {
      title: 'id',
      dataIndex: '',
    },
    {
      title: 'name',
      dataIndex: '',
    },
    {
      title: 'age',
      dataIndex: '',
    },
  ];
  ```
