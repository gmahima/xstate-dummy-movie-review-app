const movies = [{
    "id": 1,
    "name": "ac leo pellentesque ultrices",
    "genre": "Drama",
    "rating": 7,
    "desc": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 2,
    "name": "purus eu magna vulputate luctus",
    "genre": "Comedy",
    "rating": 5,
    "desc": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 3,
    "name": "nisl venenatis lacinia",
    "genre": "Drama",
    "rating": 5,
    "desc": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 4,
    "name": "porttitor",
    "genre": "Comedy",
    "rating": 10,
    "desc": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 5,
    "name": "elit proin interdum mauris non",
    "genre": "Comedy",
    "rating": 1,
    "desc": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 6,
    "name": "lacinia sapien quis libero nullam",
    "genre": "Action|Adventure|Animation|Children|Fantasy|Sci-Fi",
    "rating": 10,
    "desc": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 7,
    "name": "sagittis dui vel nisl duis",
    "genre": "Comedy|Horror|Thriller",
    "rating": 4,
    "desc": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 8,
    "name": "elit ac nulla",
    "genre": "Fantasy|Horror",
    "rating": 3,
    "desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 9,
    "name": "iaculis",
    "genre": "Comedy|Musical",
    "rating": 8,
    "desc": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 10,
    "name": "pellentesque ultrices phasellus id sapien",
    "genre": "Western",
    "rating": 4,
    "desc": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 11,
    "name": "venenatis non sodales",
    "genre": "Adventure|Children|Fantasy|Sci-Fi",
    "rating": 9,
    "desc": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 12,
    "name": "erat",
    "genre": "Documentary",
    "rating": 5,
    "desc": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 13,
    "name": "ligula sit",
    "genre": "Comedy|Drama|Romance",
    "rating": 6,
    "desc": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 14,
    "name": "accumsan tellus nisi",
    "genre": "Comedy|Drama",
    "rating": 9,
    "desc": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 15,
    "name": "at diam nam tristique tortor",
    "genre": "Documentary",
    "rating": 8,
    "desc": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 16,
    "name": "quisque erat eros viverra eget",
    "genre": "Comedy",
    "rating": 3,
    "desc": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 17,
    "name": "dapibus dolor vel est",
    "genre": "Drama",
    "rating": 8,
    "desc": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 18,
    "name": "diam nam tristique",
    "genre": "Comedy|Romance",
    "rating": 3,
    "desc": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 19,
    "name": "amet consectetuer adipiscing",
    "genre": "Comedy|Drama|Romance",
    "rating": 2,
    "desc": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 20,
    "name": "vestibulum sit",
    "genre": "Action|Drama",
    "rating": 5,
    "desc": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 21,
    "name": "phasellus sit amet erat",
    "genre": "Comedy",
    "rating": 10,
    "desc": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 22,
    "name": "orci eget",
    "genre": "Comedy",
    "rating": 1,
    "desc": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 23,
    "name": "nulla suspendisse potenti",
    "genre": "Comedy|Drama",
    "rating": 3,
    "desc": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 24,
    "name": "amet eleifend pede libero",
    "genre": "Drama|Thriller",
    "rating": 9,
    "desc": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 25,
    "name": "vestibulum ante",
    "genre": "Drama",
    "rating": 6,
    "desc": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 26,
    "name": "in tempus sit amet",
    "genre": "Adventure|Drama|Western",
    "rating": 7,
    "desc": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 27,
    "name": "erat fermentum justo",
    "genre": "Comedy|Musical",
    "rating": 4,
    "desc": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 28,
    "name": "consequat lectus in est risus",
    "genre": "Drama",
    "rating": 10,
    "desc": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 29,
    "name": "cum sociis natoque",
    "genre": "Drama|Film-Noir|Thriller",
    "rating": 9,
    "desc": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 30,
    "name": "eu orci mauris lacinia",
    "genre": "Drama|Thriller",
    "rating": 10,
    "desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 31,
    "name": "penatibus et magnis",
    "genre": "Action|Adventure|Sci-Fi",
    "rating": 7,
    "desc": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 32,
    "name": "quam suspendisse potenti nullam",
    "genre": "Action|Adventure|Drama|Romance|War",
    "rating": 9,
    "desc": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 33,
    "name": "amet",
    "genre": "Drama",
    "rating": 4,
    "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 34,
    "name": "tempus",
    "genre": "Horror|Thriller",
    "rating": 6,
    "desc": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 35,
    "name": "blandit",
    "genre": "Action|Western",
    "rating": 10,
    "desc": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 36,
    "name": "vivamus",
    "genre": "Action|Adventure|Drama|Horror|Thriller",
    "rating": 9,
    "desc": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 37,
    "name": "elit",
    "genre": "Documentary",
    "rating": 2,
    "desc": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 38,
    "name": "posuere nonummy integer",
    "genre": "Crime|Drama|Thriller",
    "rating": 7,
    "desc": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 39,
    "name": "pulvinar sed nisl nunc",
    "genre": "Drama",
    "rating": 4,
    "desc": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 40,
    "name": "pellentesque",
    "genre": "Comedy|Documentary",
    "rating": 2,
    "desc": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 41,
    "name": "sollicitudin vitae consectetuer eget rutrum",
    "genre": "Crime|Drama",
    "rating": 4,
    "desc": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 42,
    "name": "pede lobortis ligula sit amet",
    "genre": "Mystery|Romance|Thriller",
    "rating": 4,
    "desc": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 43,
    "name": "sem fusce",
    "genre": "Horror|Mystery|Thriller",
    "rating": 1,
    "desc": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 44,
    "name": "et eros",
    "genre": "Drama",
    "rating": 3,
    "desc": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 45,
    "name": "feugiat et eros vestibulum ac",
    "genre": "Action|Adventure|Comedy|Crime|Thriller",
    "rating": 10,
    "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 46,
    "name": "eu",
    "genre": "Drama",
    "rating": 4,
    "desc": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 47,
    "name": "non interdum in ante vestibulum",
    "genre": "Western",
    "rating": 6,
    "desc": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 48,
    "name": "odio consequat varius integer ac",
    "genre": "Adventure|Animation|Children",
    "rating": 8,
    "desc": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 49,
    "name": "nunc commodo placerat praesent blandit",
    "genre": "Comedy|Drama",
    "rating": 2,
    "desc": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 50,
    "name": "sed vestibulum sit amet cursus",
    "genre": "Western",
    "rating": 5,
    "desc": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 51,
    "name": "posuere metus",
    "genre": "Comedy|Musical",
    "rating": 10,
    "desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 52,
    "name": "ridiculus",
    "genre": "Adventure|Comedy|Fantasy",
    "rating": 8,
    "desc": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 53,
    "name": "tristique tortor eu",
    "genre": "Western",
    "rating": 6,
    "desc": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 54,
    "name": "orci luctus",
    "genre": "Drama",
    "rating": 4,
    "desc": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 55,
    "name": "praesent blandit nam",
    "genre": "Drama",
    "rating": 5,
    "desc": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 56,
    "name": "tristique in tempus sit",
    "genre": "Drama|War",
    "rating": 10,
    "desc": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 57,
    "name": "ut dolor morbi vel",
    "genre": "Documentary",
    "rating": 8,
    "desc": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 58,
    "name": "augue vestibulum rutrum rutrum neque",
    "genre": "Horror",
    "rating": 7,
    "desc": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 59,
    "name": "non lectus aliquam",
    "genre": "Comedy|Drama|Romance",
    "rating": 9,
    "desc": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 60,
    "name": "praesent lectus vestibulum quam sapien",
    "genre": "Documentary|War",
    "rating": 6,
    "desc": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 61,
    "name": "nulla ac enim",
    "genre": "Comedy",
    "rating": 1,
    "desc": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 62,
    "name": "elementum ligula vehicula",
    "genre": "Comedy|Drama",
    "rating": 9,
    "desc": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 63,
    "name": "ornare consequat lectus in est",
    "genre": "Comedy|Drama",
    "rating": 1,
    "desc": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 64,
    "name": "sodales scelerisque",
    "genre": "Comedy|Drama|Romance",
    "rating": 3,
    "desc": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 65,
    "name": "id nulla ultrices aliquet",
    "genre": "Comedy|War",
    "rating": 10,
    "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 66,
    "name": "sollicitudin ut suscipit a",
    "genre": "Drama",
    "rating": 10,
    "desc": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 67,
    "name": "convallis duis",
    "genre": "Drama",
    "rating": 4,
    "desc": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 68,
    "name": "proin at turpis",
    "genre": "Comedy|Fantasy|Romance",
    "rating": 6,
    "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 69,
    "name": "felis fusce posuere felis",
    "genre": "Action|Crime|Drama",
    "rating": 1,
    "desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 70,
    "name": "curabitur in libero",
    "genre": "Documentary",
    "rating": 7,
    "desc": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 71,
    "name": "donec quis orci eget",
    "genre": "Drama|Musical|Romance",
    "rating": 7,
    "desc": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 72,
    "name": "ut",
    "genre": "Action",
    "rating": 9,
    "desc": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 73,
    "name": "metus arcu adipiscing molestie",
    "genre": "Comedy|Drama|Romance",
    "rating": 4,
    "desc": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 74,
    "name": "nascetur ridiculus mus vivamus vestibulum",
    "genre": "Drama|Romance",
    "rating": 4,
    "desc": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 75,
    "name": "sagittis",
    "genre": "Documentary",
    "rating": 8,
    "desc": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 76,
    "name": "in faucibus orci luctus et",
    "genre": "Children|Fantasy|Sci-Fi",
    "rating": 4,
    "desc": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 77,
    "name": "congue risus semper porta",
    "genre": "Documentary",
    "rating": 2,
    "desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 78,
    "name": "quam fringilla rhoncus",
    "genre": "Children|Comedy",
    "rating": 9,
    "desc": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 79,
    "name": "mi nulla ac enim",
    "genre": "Horror|Sci-Fi",
    "rating": 6,
    "desc": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 80,
    "name": "quisque id justo sit",
    "genre": "Horror",
    "rating": 2,
    "desc": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 81,
    "name": "non sodales sed tincidunt eu",
    "genre": "Comedy",
    "rating": 6,
    "desc": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 82,
    "name": "faucibus cursus urna ut",
    "genre": "Crime|Film-Noir|Romance",
    "rating": 7,
    "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 83,
    "name": "turpis nec",
    "genre": "Action|Drama|Western",
    "rating": 4,
    "desc": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 84,
    "name": "sociis natoque penatibus",
    "genre": "Thriller",
    "rating": 1,
    "desc": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 85,
    "name": "cubilia",
    "genre": "Crime|Drama",
    "rating": 4,
    "desc": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 86,
    "name": "in",
    "genre": "Action|Comedy",
    "rating": 8,
    "desc": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "img": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 87,
    "name": "ultrices erat tortor sollicitudin",
    "genre": "Action|Animation|Sci-Fi",
    "rating": 1,
    "desc": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 88,
    "name": "ut dolor morbi",
    "genre": "Action|Adventure|Drama|Fantasy",
    "rating": 3,
    "desc": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 89,
    "name": "habitasse platea",
    "genre": "Drama|Thriller",
    "rating": 7,
    "desc": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 90,
    "name": "id consequat",
    "genre": "Action|Musical|IMAX",
    "rating": 1,
    "desc": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 91,
    "name": "porttitor id consequat in consequat",
    "genre": "Comedy|Musical|Romance",
    "rating": 4,
    "desc": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 92,
    "name": "ac diam cras pellentesque",
    "genre": "Drama",
    "rating": 3,
    "desc": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 93,
    "name": "laoreet",
    "genre": "Children|Drama|Fantasy|Mystery",
    "rating": 1,
    "desc": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 94,
    "name": "suscipit a feugiat",
    "genre": "Drama",
    "rating": 10,
    "desc": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 95,
    "name": "nulla neque libero convallis eget",
    "genre": "Drama",
    "rating": 6,
    "desc": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 96,
    "name": "dictumst maecenas ut",
    "genre": "Comedy",
    "rating": 6,
    "desc": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 97,
    "name": "integer a nibh in",
    "genre": "Drama",
    "rating": 3,
    "desc": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 98,
    "name": "metus arcu",
    "genre": "(no genres listed)",
    "rating": 7,
    "desc": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "img": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 99,
    "name": "interdum mauris ullamcorper purus",
    "genre": "Comedy|Crime",
    "rating": 6,
    "desc": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "img": "https://source.unsplash.com/400x400/?nature,water"
  }, {
    "id": 100,
    "name": "dapibus nulla suscipit",
    "genre": "Crime|Drama|Mystery|Thriller",
    "rating": 1,
    "desc": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "img": "http://dummyimage.com/100x100.jpg/dddddd/000000"
}]

export const genres = [
  'all',
  'Crime',
  'Action',
  'Drama',
  'Mystery',
  'Fantasy',
  'Thriller',
  'Comedy',
  'Children',
  'Animation',
  'Sci-Fi',
  'Horror'
]

export default movies