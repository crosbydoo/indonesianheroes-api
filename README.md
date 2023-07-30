
# Pahlawan Indonesia API

### Tentang
Sebuah layanan API yang memberikan informaasi mengenai seputar pahlawan Negara Kesatuan Republik Indonesia. API ini terinspirasi dari API Lokal Indonesia yang sama dengan api ini namun sudah diakses dan saya menemukan data JSON-nya kemudian dari situ saya berinisiatif membuat apinya. Semoga dengan API yang bersifat open source ini memudahkan developer yang sedang belajar atau yang sudah advance bisa memakainya, dan semoga saya bisa menambahkan fitur pada API Pahlawan Indonesia ini. Untuk Source/Sumber **Hero.json** nya bisa klik <a href="https://gist.github.com/yuristianto/d2b2f75292927f15b633d9f8a3bd4ec6" target="_blank">Disini</a>. Semoga Membantu hehe 😊



## ENPOINTS

#### 1. GET All Pahlawan

```
  GET https://pahlawanindonesia-api.cyclic.app/api/heroes
```
#### Contoh Response
```
[
    {
        "_id": "64c0cea37463c276206c725f",
        "nama": "A.H. Nasution ",
        "nama2": "Jendral Besar Dr.Abdul Haris Nasution",
        "kategori": "Pahlawan Nasional",
        "asal": "Sumatera Utara",
        "lahir": "Selasa, 3 Desember 1918 di Kotanopan, Mandailing Natal, Sumatera Utara",
        "usia": "81 tahun",
        "gugur": "Selasa Wage, 5 September 2000 di Jakarta, Indonesia",
        "lokasimakam": "Taman Makam Pahlawan (TMP) Kalibata, Jakarta.",
        "history": "Jenderal Besar TNI, Panglima Angkatan Perang Republik Indonesia",
        "img": "https://image.ibb.co/cexrRK/a_h_nasution.jpg",
        "__v": 0
    },
    ...
]
````
#### 2. GET Pahlawan

```
  GET https://pahlawanindonesia-api.cyclic.app/api/heroes/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Contoh Response
```
{
    "_id": "64c0cea37463c276206c725f",
    "nama": "A.H. Nasution ",
    "nama2": "Jendral Besar Dr.Abdul Haris Nasution",
    "kategori": "Pahlawan Nasional",
    "asal": "Sumatera Utara",
    "lahir": "Selasa, 3 Desember 1918 di Kotanopan, Mandailing Natal, Sumatera Utara",
    "usia": "81 tahun",
    "gugur": "Selasa Wage, 5 September 2000 di Jakarta, Indonesia",
    "lokasimakam": "Taman Makam Pahlawan (TMP) Kalibata, Jakarta.",
    "history": "Jenderal Besar TNI, Panglima Angkatan Perang Republik Indonesia",
    "img": "https://image.ibb.co/cexrRK/a_h_nasution.jpg",
    "__v": 0
},
````


## Thanks To
- Allah SWT
- Keluarga Saya Tercinta
- Diri saya sendiri.
- Teman - Teman dan Sahabat Saya yang Handsome dan Cantik.
- Dida Yulanda sebagai seseorang yang memotivasi saya untuk terus bisa maju hingga saat ini.
- Mas Yuristianto sebagai penyedia Hero.json
- Dan semua pihak yang terlibat dan tidak bisa saya sebutkan satu persatu.

