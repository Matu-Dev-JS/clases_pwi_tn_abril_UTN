MAIN o PROD

QA/testing

DEV 

Feature/bugfix

Feature : la creamos cuando queremos agregar una caracteristica a una pagina
EJEMPLO: Desarrollo el form de login

Bugfix: Lo creamos cuando debemos arreglar algo (NO AGREGAR COSAS NUEVAS)
Ejemplo: Arreglo validacion de password


git add .
git commit -m 'checkpoint'
git push -u feature/form-login
git checkout dev
git merge feature/form-login
Probamos que todo este bien integrado en dev
Despues eliminamos la rama feature/form-login tanto localmente como en github