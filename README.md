
# Pahlawan Indonesia API

### Tentang
Sebuah layanan API yang memberikan informaasi mengenai seputar pahlawan Negara Kesatuan Republik Indonesia. API ini terinspirasi dari API Lokal Indonesia yang sama dengan api ini namun sudah diakses dan saya menemukan data JSON-nya kemudian dari situ saya berinisiatif membuat apinya. Semoga dengan API yang bersifat open source ini memudahkan developer yang sedang belajar atau yang sudah advance bisa memakainya, dan semoga saya bisa menambahkan fitur pada API Pahlawan Indonesia ini. Semoga Membantu hehe 😊

Data Source [Hero.json](https://gist.github.com/yuristianto/d2b2f75292927f15b633d9f8a3bd4ec6)

Demo: [https://pahlawanindonesia-api.cyclic.app/](https://pahlawanindonesia-api.cyclic.app/)

#### Apa itu Rest-API ?
REST API yaitu salah satu arsitektur yang ada di API (Application Programming Interface). Untuk REST atau Representational State Transfer sendiri menggunakan HTTP (Hypertext Transfer Protocol) sebagai media pertukaran data. Sehingga beberapa aplikasi tertentu yang sedang developer kembangan menggunakannya. 

#### Apa itu Dynamic API
API yang mengambil data dari sumber yang terus berubah atau diperbarui.

#### Keuntungan Dynamic API
- Untuk skala kecil dynamic memungkinkan bisa diupload ke hosting static seperti netlify, railway, cyclic, vercel.
- Respons real-time
- Mudah dalam melakukan integrasi
- Pembaruan dan perbaikan mudah


## ENPOINTS

#### 1. GET All Pahlawan

```
  GET | https://pahlawanindonesia-api.cyclic.app/api/heroes
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
  GET | https://pahlawanindonesia-api.cyclic.app/api/heroes/{id}
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
#### 3. GET Search Pahlawan

```
  GET | https://pahlawanindonesia-api.cyclic.app/api/heroes/search/{nama}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nama`      | `string` | **Required**. nama of item to fetch |

#### Contoh Response
```
[
  {
  "_id": "64c0faf67463c276206c72ed",
  "nama": "Juanda Kartawijaya ",
  "nama2": "Ir. H. Raden Djoeanda Kartawidjaja",
  "kategori": "Pahlawan Kemerdekaan Nasional",
  "asal": "Jawa Tengah",
  "lahir": "14 Januari 1911 di Tasikmalaya, Hindia Belanda, Jawa Tengah",
  "usia": "52 tahun",
  "gugur": " 7 November 1963 di Jakarta, Indonesia",
  "lokasimakam": "Taman Makam Pahlawan (TMP) Kalibata, Jakarta",
  "history": "Perdana Menteri Indonesia Terakhir, Menteri Keuangan ke 11, Menteri Pertahanan ke 11, Menteri Pekerjaan Umum ke 5, Menteri Perhubungan ke 3. Deklarasi Djuanda tahun 1957 (Negara Kepulauan NKRI).",
  "img": "https://image.ibb.co/kLCfoz/juanda_kartawijaya.jpg",
  "__v": 0
  }
]
````
#### 4. Coming Soon


## Note
Pada saat ini API yang disajikan hanya bisa melakukan method GET All Pahlawan, GET Pahlawan by Id, dan Search. untuk pengembangan dan peningkatan kualitas akan dilakukan secara berkala.

### Limitasi 
Karena api dideploy secara gratis menggunakan cyclic maka akan ada batasan untuk requestnya. request API bulanan sebanyak 10.000, durasi permintaan API selama 10 detik, dan batasan 50 permintaan API per detik.

Mohon maaf bila terjadi ketidaknyamanan. Kritik dan saran diterima demi pengembangan API ini. Bila ada pernyataan bisa kontak melalui email saya dibawah ini.

Email: ristudev@gmail.com



## Thanks To
- Allah SWT
- Keluarga Saya Tercinta
- Diri saya sendiri.
- Teman - Teman dan Sahabat Saya yang Handsome dan Cantik.
- Dida Yulanda sebagai seseorang yang memotivasi saya untuk terus bisa maju hingga saat ini.
- Mas Yuristianto sebagai penyedia Hero.json
- Dan semua pihak yang terlibat dan tidak bisa saya sebutkan satu persatu.

