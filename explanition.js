   
   Crea una API conectada a una base de datos e implemente los siguientes endpoints 
   (muy similares a SWAPI.dev or SWAPI.tech):


    [GET] /people Listar todos los registros de people en la base de datos.
    [GET] /people/<int:people_id> Muestra la información de un solo personaje según su id.
    [GET] /planets Listar todos los registros de planets en la base de datos.
    [GET] /planets/<int:planet_id> Muestra la información de un solo planeta según su id.
    [GET] /users Listar todos los usuarios del blog.
    [GET] /users/<int:user_id>/favorites Listar todos los favoritos que pertenecen al usuario según su id.
    [POST] /favorite/planet/<int:planet_id>/<int:user_id> Añade un nuevo planet favorito al usuario.
    [POST] /favorite/people/<int:people_id>/<int:user_id> Añade un nuevo people favorito al usuario .
    [DELETE] /favorite/planet/<int:planet_id>/<int:user_id> Elimina un planet favorito.
    [DELETE] /favorite/people/<int:people_id>/<int:user_id> Elimina un people favorito .

    #Obteniendo datos
    #Suponiendo que tiene un objeto Persona en su archivo models.py.
    #conseguir a toda la gente
# SELECT * FROM Person;
people_query = Person.query.all()

# get only the ones named "Joe"
people_query = Person.query.filter_by(name='Joe')
#SELECT * FROM Person WHERE name = "Joe"

# map the results and your list of people  inside of the all_people variable
all_people = list(map(lambda x: x.serialize(), people_query))

# get just one person basado en su llave primaria
user1 = Person.query.get(person_id)

#Inserting data
Assuming you have a Person object in your models.py file.
user1 = Person()
user1.username = "my_super_username"
user1.email = "my_super@email.com"
db.session.add(user1)
db.session.commit()

#Updating data

user1 = Person.query.get(person_id)
if user1 is None:
    return jsonify({'msg':'User not found'},404

if "username" in body:
    user1.username = body["username"]
if "email" in body:
    user1.email = body["email"]
db.session.commit()

#Delete data

user1 = Person.query.get(person_id)
if user1 is None:
   return jsonify({'msg':'User not found'},404
db.session.delete(user1)
db.session.commit()