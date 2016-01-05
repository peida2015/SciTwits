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
    "Studying the hidden ecosystems of microbes is one of the frontiers in biology today.  How the billions of bacteria living in and on a human body may directly affect the host's well-being.  We expected that we would be able to detect the human microbiome in the air around a person, but we were surprised to find that we could identify most of the occupants just by sampling their microbial cloud.",
    2,
    "What we cannot see may affect our health in a big way. Research may lead to better deodorant or even better antibiotics."
  ],
  [ "Controlled Nuclear Fusion",
    "Nuclear fusion is our energy future.  There is no better known alternative.  Our team is close to success.",
    1,
    "Fusion is what clean and inexhaustible energy truly means."
  ],
  [ "Machine Learning",
    "Machine learning is helping computers solve problems more efficiently.  Our team is able help modern PCs learn to play at Grandmasters level, a feat that was done only by supercomputers before, by having them evaluate only the best moves",
    3,
    "Help computers work smarter, and harder."
  ],
]

20.times do
  project = [1.sentences[0..-2], (5+rand(4)).sentences,1+rand(3), (1+rand(1)).sentences]
  projects << project
end

projects.each do |title, description, owner_id, significance|
  Project.create(title: title,
      description: description,
      owner_id: owner_id,
      significance: significance)
end

twits = [
  [1, 2, 'Now humans have even slimmer chance.']
]

100.times do
  twit = [1+rand(3), 1+rand(20), (1+rand(2)).sentences]
  twits << twit
end

twits.each do |user_id, project_id, body|
  Twits.create(user_id: user_id, project_id: project_id, body: body);
end
