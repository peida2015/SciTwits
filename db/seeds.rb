# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# users = [
#   {
#     username: user, password: password
#   }
# ]
require 'ipsum';

users = [["user1","password"],["user2","password"],["user3","password"]]

users.each do |username, password|
  User.create(username: username, password: password);
end


projects = [
  [ "Theory of Everything",
    "Finishing Einstein's Dream",
    1,
    "Explains everything that happens in the Universe"
  ],
  [ "The Microbiomes Project",
    "Studying the hidden ecosystems of microbes is one of the frontiers in biology today.  How the billions of bacteria living in and on a human body may directly affect the host's well-being.  DNA sequencing tools allow us to explore their relationships with a new lens.",
    2,
    "One of the most exciting developments in biology today.  It may open up path for new deodorants and drugs."
  ],
  [ "Controlled Nuclear Fusion",
    "Nuclear fusion is our energy future.  There is no better known alternative.  Our team is close to success.",
    1,
    "Fusion is what clean and inexhaustible energy truly means."
  ],
  [ "Machine Learning",
    "Machine learning is helping computers solve problems more efficiently.  Our team is able help modern PCs learn to solve chess problems efficiently and play at Grandmasters level, a feat that was done only by supercomputers before",
    3,
    "Help computers work smarter, and harder."
  ],
]

20.times do
  project = [1.sentences[0..-2], (5+rand(4)).sentences,1+rand(2), (1+rand(1)).sentences]
  projects << project
end

projects.each do |title, description, owner_id, significance|
  Project.create(title: title,
      description: description,
      owner_id: owner_id,
      significance: significance)
end
