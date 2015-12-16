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


projects = [
  [ "Theory of Everything",
    "Finishing Einstein's Dream",
    1,
    "Explains everything that happens in the Universe"
  ],
  [ "The Microbiomes Project",
    "Study the hidden ecosystems of microbes",
    2
  ]
]

projects.each do |title, description, owner_id, significance|
  Project.create(title: title,
      description: description,
      owner_id: owner_id,
      significance: significance)
end
