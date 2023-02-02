def str = "clipboard string"
// split the string by space
def labels = str.split(' ').findAll { it != '' }
// map the labels
def mappedLabels = labels.collect { it -> "{\ntitle: '${it}',\ndataIndex: ''\n}".trim() }
// join the mapped labels
def joinedLabels = mappedLabels.join(',\n')
def columns = "[\n${joinedLabels}\n]"
def result = "const columns: ProColumnDetectType<any>[] = ${columns};"
// print the result
println result
return result