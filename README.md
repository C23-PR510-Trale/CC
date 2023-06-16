## **C23-PR510 – Product Capstone Bangkit Academy 2023**

<p align="center">
  <img src="Trale.jpeg" alt="logo" height="180" />
</p>

<h1 align="center">Travel and Learn</h1>

| Nama | ID Cohort | Universitas |
| :----:| :----:| :----:|
| Muhammad Dhoni Apriyadi | M040DSX1474 | Institut Teknologi Sumatera |
| Anugra Salaza | M038DSX2316 | Institut Teknologi Sepuluh Nopember |
| Deyyana Aulia Hakim | M038DKY4137 | Institut Teknologi Sepuluh Nopember |
| Islam Ilhamminata | C120DKX4736 | UIN Maulana Malik Ibrahim Malang |
| Evania Trafika | C305DSY2896 | UPN "Veteran" Jawa Timur |
| Aghni Qisthina Al Rahma | A305DKY4028 | UPN "Veteran" Jawa Timur |

The service available:

- Users
  <pre>GET  /api/users/</pre>
  <pre>GETID /api/users/id</pre>
  <pre>POST /api/users/register</pre>
  <pre>PATCH  /api/users/update</pre>
  <pre>DEL /api/users/</pre>

- Predictions
  <pre>POST /</pre>
  <pre>GET /api/users/trip</pre>
  <pre>GETID /api/users/trip/id</pre>

- Voluntrip
  <pre>GET /api/users/volun</pre>
  <pre>GETID /api/users/volun/id</pre>


## Architecture
<p align="center">
  <img src="arsitektur.png" alt="logo" />
</p>

- ### 1. Creating Flask App to load model from Machine Learning
  - Create simple flask api with the name `main.py` and `helper.py`
  - save model and dataset for Machine learning in same directory 
  - Load the model in `helper.py`
  - create endpoint and test model by running flask using `python main.py` to run it locally and getting predicted data using local ip.
- ### 2. creating Login and Register with Authentication
  - Creating simple Login and Register
  - create Json Web Token(JWT) to authenticate login and register
  - change database to cloud sql database
  - Test database to user login and register
  - Test authentication JWT using POSTMAN
- ### 3. Google Cloud Deployment
  - create Dockerfile and requirement.txt to store depedency and place it in root directory
  - clone repository `https://github.com/C23-PR510-Trale/CC.git` in cloud shell
  - create cloudbuild.yaml, Dockerfile, trigger in cloud build to make a build container
  - select trigger to everytime push happen in main branch
  - build cloudbuild trigger
  - add permission to cloudbuild service acccount and run the trigger to automate deployment


### Dependency

* [Hapi Server](https://www.npmjs.com/package/@hapi/hapi)
* [JWT](https://www.npmjs.com/package/@hapi/jwt)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* [Validator](https://www.npmjs.com/package/validator)
* [Express](https://www.npmjs.com/package/express)]
