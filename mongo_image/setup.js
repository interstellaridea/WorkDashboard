
db.getSiblingDB('admin')
.auth({user: 'dash-admin', pwd: 'k33p1tr3al'});

db.createUser({ user: 'avadmin', pwd: 'password', roles: [{role: 'readWrite', db: 'workdashboard'}]});