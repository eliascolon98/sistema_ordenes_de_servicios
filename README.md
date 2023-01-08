# sistema_ordenes_de_servicios
Sistema de órdenes de servicio para una empresa que ofrece servicios de mantenimiento e instalación de soportes para televisores. Los clientes pueden hacer una solicitud de servicio generando un ticket a través del sistema, al cual se le debe generar un token y asignar a un técnico de forma aleatoria para que atienda la solicitud.
## Instalación

# Instalacion de dependencias para Node
$ npm i
# o
$ yarn install

# Creación del archivo .ENV basado en el archivo .ENV.example
$ cp .env.example .env

# ----------------- Pasos para correr el proyecto ----------------
# Paso uno:  Si no tiene una base de datos, puede crear una a traves de docker-compose.yml 
# archivo basado en el docker-compose.yml.example archivo en el proyecto
$ cp docker-compose.yml.example docker-compose.yml

# Nota: Actualmente la base de datos está conectada a posgrest desde una base de datos externa para pruebas
# Teniendo esto en cuenta proceder a escribir el comando:
$ docker-compose up

#si quiere hacer las peticiones a la base de datos que genera Docker lo unico que hay que hacer
#es ajustar el archivo docker-compose.yml y comentar las variables DB_HOST y BD_PASSWORD de la conexió externa 
# y descomentar las mismas variables de la conexion local, tambien tener en cuenta que hay que modificar el
# archivo .ENV se hará el mismo procedimiento anterior, comentar las variables DB_HOST y BD_PASSWORD de "produccion aws"
# y descomentar las que especifica que son para Docker ej: 

# Si se ejecuta directamente desde docker el backend el host de base de datos cambiar el archivo .ENV
# DB_HOST='postgresql2'
# BD_PASSWORD='eliascolon98'
# si se encuentra fuera de docker, en local 
# DB_HOST='localhost'
# BD_PASSWORD='eliascolon98'
#si quiere conectar la base de datos externa:
DB_HOST='ordenesserviciosbd.cixqsl9wgrex.us-east-1.rds.amazonaws.com'
BD_PASS='ordenes_servicios_bd'


# Es necesario tener previamente instalado docker y docker-compose en tu equipo para que este proyecto funcione correctamente. #Si has seguido todos los pasos correctamente, deberías tener la base de datos de tu proyecto lista para usar


## Para correr la App simplemente ejecutar el siguiente comando

$ npm run dev

#  Para correr la App en producción ejecutar el siguiente comando
$ npm run build
$ npm run start
```

## Endpoints

``bash`
#para local;
$ http://localhost:3000/api/v1/
#para produccion
$ http://134.209.90.193:8080/api/v1/
# Clientes:
$ http://localhost:3000/api/v1/cliente                              # POST
$ http://localhost:3000/api/v1/cliente                              # GET
$ http://localhost:3000/api/v1/cliente/id_cliente                   # GET
$ http://localhost:3000/api/v1/cliente/id_cliente                   # PUT
$ http://localhost:3000/api/v1/cliente/id_cliente                   # DELETE
# Tecnicos:
$ http://localhost:3000/api/v1/tecnico                              # POST
$ http://localhost:3000/api/v1/tecnico                              # GET
$ http://localhost:3000/api/v1/tecnico/id_tecnico                   # GET
$ http://localhost:3000/api/v1/tecnico/id_tecnico                   # PUT
$ http://localhost:3000/api/v1/tecnico/id_tecnico                   # DELETE
# Solicitud de Servicios
$ http://localhost:3000/api/v1/solicitudes                          # POST
$ http://localhost:3000/api/v1/solicitudes                          # GET
$ http://localhost:3000/api/v1/tecnicos/id_tecnico/solicitudes      # GET
$ http://localhost:3000/api/v1/cliente/token                        #PUT                

```
## Documentación en Swagger 
```bash
$ http://localhost:3000/api/v1/docs
$ http://134.209.90.193:8080/api/v1/docs/
```
## Testing o purbeas unitarias
```bash
$ npm run test
```