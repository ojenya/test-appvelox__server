const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.get('/appointment', (req, res) => {
    res.json( [{
                id: 0,
                date: 1603188000,
                imageUrl: 'https://klinikarassvet.ru/upload/iblock/5a2/5a27bfd99458ef81a8cf9c530da9e38f.png',
                depart:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                name:'Малушко Т. Н.',
                doc_depart:'Хирургическое отделение'
            },
            {
                id: 1,
                date: 1602351000,
                imageUrl: 'https://образжизни.москва/wp-content/uploads/2018/08/Peganov.jpg',
                depart:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 51, лит. А',
                name:'Харьков В. С.',
                doc_depart:'Терапевтическое отделение'
            },
            {
                id: 2,
                date: 1603875600,
                imageUrl: 'https://lh3.googleusercontent.com/proxy/ajdTgZTJbm0OxgAh_Nd_R1o4UHilwMj5HZ_bMe6kD-GQsDy01jOcNcLo28UKxOhwdpPhw7mNKX0DR-bXCHJOwCgcsOon',
                depart:'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                name:'Малушко Т. Н.',
                doc_depart:'Хирургическое отделение'
            },
            {
                id: 3,
                date: 1604081400,
                imageUrl: 'https://www.emcmos.ru/sites/default/files/lobuznov-andrey-yurevich_510x520.jpg',
                depart:'СПБ ГБУЗ "Городская поликлиника №15", пр. Комсомольский, д. 12, к. 112',
                name:'Верещагин В. Н.',
                doc_depart:'Неврологическое отделение'
            },
            {
                id: 4,
                date: 1604233200,
                imageUrl: 'https://citilab.clinic/assets/components/phpthumbof/cache/averina2.7534c4d72aa03bc3b26bd2c324983d481.png',
                depart:'СПБ ГБУЗ "Городская поликлиника №192", пр. Мичурина, д. 21, к. 11',
                name:'Гайнулина Д. К.',
                doc_depart:'Стоиматологическое отделение'
            }
        ]
    )
})

app.listen(port)