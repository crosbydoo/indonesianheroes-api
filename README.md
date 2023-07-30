
# Pahlawan Indonesia API

Sebuah layanan API yang memberikan informaasi mengenai seputar pahlawan Negara Kesatuan Republik Indonesia


## ENPOINTS

### 1. GET All Pahlawan

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

#### add(num1, num2)

Takes two numbers and returns the sum.


## Authors

#### API dibuat oleh
- [@crosbydoo](https://www.github.com/crosbydoo)

