module.exports = {
    plugins: [
        require('autoprefixer'), // проставляет префиксы стилям (Для работы в файле package.json пропишем следующее "browserslist": ['> 1%','last 3 version'])
        require('css-mqpacker'), // сжимает медиа запросы
        require('cssnano')({ // максимально минифицирует исходные стили
            preset: [
                'default', 
                {
                    discardComments: {
                        removeAll: true,
                    }
                }
            ]
        })  
    ] 
}