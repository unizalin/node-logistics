### NODE-LOGISTICS

##### 取得全部貨物
- methods : GET
- API : https://node-logistics-production.up.railway.app/allCargos
- RESPONSE
```
  {
    "status": "success",
    "message": "success",
    "data": [
        {
            "_id": "6362299207876e157f7646f5",
            "describe": "TOY",
            "singNumber": "SFQ20982728",
            "remark": "TEST",
            "startDate": "2022-11-01T00:00:00.000Z",
            "endDate": "2022-11-01T00:00:00.000Z",
            "createdAt": "2022-11-02T08:25:54.686Z",
            "id": "6362299207876e157f7646f5"
        },
    ]
}
```
### 新增一個貨物
- methods: POST
- API : https://node-logistics-production.up.railway.app/addCargo
- DATA
```
  {
   "singNumber": "SFQ20982728", // required
   "describe": "TOY4", // required
   "startDate": "2022-11-01" // required
   "endDate": "2022-11-01", // required
   "remark": "TEST",
   }
```

#### 編輯單一貨物
- methods : PATCH
- API : https://node-logistics-production.up.railway.app/updateCargo/:id
- :id 為所編輯的貨物id
- DATA ｀
```
{
   "describe": "TOY3EDIT",
   "endDate": "2022-11-01",
   "remark": "TEST",
   "singNumber": "SFQ20982728",
   "startDate": "2022-11-01"
}
```
#### 刪除單一貨物
- methods: DELETE
- API : https://node-logistics-production.up.railway.app/delCargo/:id
- :id 為所想刪除的貨物id

#### 刪除單一貨物
- methods: DELETE
- API : https://node-logistics-production.up.railway.app/delAllCargos


