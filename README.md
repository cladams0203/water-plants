# water-plants

Api for tracking and watering plant life

## Base URL https://water-my-plants-tracker.herokuapp.com

---

## Endpoint Summary Table

---

|  Type  |       Endpoint        |             Description              | Protected |
| :----: | :-------------------: | :----------------------------------: | :-------: |
|  POST  |  /api/users/register  |         Register a new User          |    No     |
|  POST  |    /api/user/login    |        Login an existing User        |    No     |
|  GET   |      /api/users       |       Get a list of all Users        |    Yes    |
|  POST  | /api/plants/user/:id  | Add a new plant to a User by User id |    Yes    |
|  GET   |      /api/plants      |            Get all plants            |    Yes    |
|  GET   |    /api/plants/:id    |       Get a Plant by Plant id        |    Yes    |
|  PUT   |    /api/plants/:id    |      Update a Plant by Plant id      |    Yes    |
| DELETE |    /api/plants/:id    |      Remove a Plant by Plant id      |    Yes    |

### Token must be passed in the header under Authorization for Protected Endpoints

---

## Endpoint Details

---

### POST /api/users/register

#### Accepts JSON:

```
  {
      "username": "test",  //required
      "password": "test",  //required
      "phone": 8675309
  }

```

#### Returns:

```
  {
      "message": "Registration Successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA4MzM1OTM5LCJleHAiOjE2MDg0MjIzMzl9.uMUOW39l157Nbp3VzJGu9FSc6tsrMLjenU2uUtReiJ8",
      "user": {
          "id": 1,
          "username": "test",
          "phone": 8675309
      }
  }
```

---

### POST /api/users/login

#### Accepts JSON:

```
  {
      "username": "test", //required
      "password": "test"  //required
  }

```

#### Returns:

```
  {
      "message": "Registration Successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA4MzM1OTM5LCJleHAiOjE2MDg0MjIzMzl9.uMUOW39l157Nbp3VzJGu9FSc6tsrMLjenU2uUtReiJ8",
      "user": {
          "id": 1,
          "username": "test",
          "phone": 8675309,
          "plants": [
            {
                "id": 1,
                "image": null,
                "species": "palm",
                "name": "breezy",
                "water_frequency": "24hr",
                "user_id": 1
            },
          ]
      }
  }
```

---

### GET /api/users

#### Returns:

```
  [
      {
          "id": 1,
          "username": "test",
          "phone": 8675309
      }
  ]
```

---

### POST /api/plants/user/:id

#### Endpoint Requires a valid User id

#### Accepts JSON:

```
  {
      "species": "palm",
      "name": "breezy",
      "water_frequency": "24hr"
  }

```

#### Returns:

```
  [
    {
        "id": 1,
        "image": null,
        "species": "palm",
        "name": "breezy",
        "water_frequency": "24hr",
        "user_id": 1
    },
    {
        "id": 2,
        "image": null,
        "species": "palm",
        "name": "breezy",
        "water_frequency": "24hr",
        "user_id": 1
    },
  ]
```

---

### PUT /api/plants/:id

#### Endpoint Requires a valid Plant id

#### Accepts JSON:

```
  {
      "species": "palm",
      "name": "breezy",
      "water_frequency": "24hr"
  }

```

#### Returns:

```
  [
    {
        "id": 1,
        "image": null,
        "species": "palm",
        "name": "breezy",
        "water_frequency": "24hr",
        "user_id": 1
    },
    {
        "id": 2,
        "image": null,
        "species": "palm",
        "name": "breezy",
        "water_frequency": "24hr",
        "user_id": 1
    },
  ]
```

---

### DELETE /api/plants/:id

#### Endpoint Requires a valid Plant id

#### Returns:

```
  [
    {
        "id": 1,
        "image": null,
        "species": "palm",
        "name": "breezy",
        "water_frequency": "24hr",
        "user_id": 1
    },
    {
        "id": 2,
        "image": null,
        "species": "palm",
        "name": "breezy",
        "water_frequency": "24hr",
        "user_id": 1
    },
  ]
```

---

### GET /api/plants/:id

#### Endpoint Requires a valid Plant id

#### Returns:

```
  {
      "id": 2,
      "image": null,
      "species": "palm",
      "name": "breezy",
      "water_frequency": "24hr",
      "user_id": 1
  },
```

---

### GET /api/plants/

#### Returns:

```
  [
    {
        "id": 2,
        "image": null,
        "species": "palm",
        "name": "breezy",
        "water_frequency": "24hr",
        "user_id": 1
    },
        {
        "id": 3,
        "image": null,
        "species": "palm",
        "name": "breezy",
        "water_frequency": "24hr",
        "user_id": 1
    },
  ]
```
