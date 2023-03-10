# sistema_ordenes_de_servicios
Sistema de órdenes de servicio para una empresa que ofrece servicios de mantenimiento e instalación de soportes para televisores. Los clientes pueden hacer una solicitud de servicio generando un ticket a través del sistema, al cual se le debe generar un token y asignar a un técnico de forma aleatoria para que atienda la solicitud.
## Instalación
```bash
#Instalación de dependencias para Node
$ npm i
#o
$ yarn install

#Creación del archivo .ENV basado en el archivo .ENV.example
$ cp .env.example .env

#-------------------------------------------------------------------------------------
#HACER ESTOS PASOS SOLO SI QUIERE EJECUTAR LA API DESDE DOCKER

#Si no tiene una base de datos, puede crear una a traves de docker-compose.yml 
#archivo basado en el docker-compose.yml.example archivo en el proyecto
$cp docker-compose.yml.example docker-compose.yml

#Actualmente la base de datos está conectada a postgres desde una base de datos externa para pruebas
#Teniendo esto en cuenta proceder a escribir el comando:
$ docker-compose up

#Una vez ejecute el comando anterior ya podrá hacer pruebas o consumir los endpoint. 

#Notas:
#Si quiere hacer las peticiones a la base de datos que genera Docker lo unico que hay que hacer
#es ajustar el archivo docker-compose.yml (si ya ejecutó el comando docker-compose up, deberá ejecutar
#el comando docker-compose down para bajar los contenedores creados y luego volver a ejecutar 
#docker-compose up para subir los contenedores con los cambios) y tener encuenta los siguiente.

#Si se ejecuta directamente desde docker el backend el host de base de datos cambiar el archivo .env
$ DB_HOST='postgresql2'
$ BD_PASSWORD='eliascolon98'

#Es necesario tener previamente instalado docker y docker-compose en tu equipo para 
#que este proyecto funcione correctamente. #Si has seguido todos los pasos correctamente, 
#link de descarga https://www.docker.com/products/docker-desktop/  
# de lo contrario tener la base de datos de proyecto lista para usar.

#----------------------------------------------------------------------------------------

#si se encuentra fuera de docker, en local 
$ DB_HOST='localhost'
$ BD_PASSWORD='eliascolon98'
#si quiere conectar la base de datos externa:
$ DB_HOST='ordenesserviciosbd.cixqsl9wgrex.us-east-1.rds.amazonaws.com'
$ BD_PASS='ordenes_servicios_bd'

#Para correr la App sin Docker, de forma local simplemente ejecutar el siguiente comando

$ npm run dev

#Para correr la App en producción ejecutar el siguiente comando
$ npm run build
$ npm run start
```

## Endpoints
```bash
#para local;
$ http://localhost:3000/api/v1/
#para produccion
$ http://134.209.90.193:8080/api/v1/
#Clientes:
$ http://localhost:3000/api/v1/cliente                              # POST
$ http://localhost:3000/api/v1/cliente                              # GET
$ http://localhost:3000/api/v1/cliente/id_cliente                   # GET
$ http://localhost:3000/api/v1/cliente/id_cliente                   # PUT
$ http://localhost:3000/api/v1/cliente/id_cliente                   # DELETE
#Tecnicos:
$ http://localhost:3000/api/v1/tecnico                              # POST
$ http://localhost:3000/api/v1/tecnico                              # GET
$ http://localhost:3000/api/v1/tecnico/id_tecnico                   # GET
$ http://localhost:3000/api/v1/tecnico/id_tecnico                   # PUT
$ http://localhost:3000/api/v1/tecnico/id_tecnico                   # DELETE
#Solicitud de Servicios
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
## Testing o pruebas unitarias
```bash
$ npm run test
```

## Siste de ordenes de servicios con Nest Js
```bash
$ https://github.com/eliascolon98/sistema_ordenes_de_servicios_nest
```
