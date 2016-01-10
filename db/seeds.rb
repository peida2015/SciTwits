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
  [ "Sustainable Transportation",
    "Developing a transporation system of the future requires adherence to sustainable principles and best practices in planning.  Innovations are being developed in our lab to meet this challenge.",
    3,
    "Moving more people more efficiently in more ways than just cars."
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
  Twit.create(user_id: user_id, project_id: project_id, body: body);
end

media = [
  ["vyetlshpahrhtt6naoc3.jpg", 'image', 2],
  ["wwqyribs4vxvxhzwr4l1.png", 'image', 2],
  ["trp2cdqhfadt05hk4yon.png", 'image', 2],
  ["main_1200_jpjnnd.jpg", 'image', 3], ["1413458769593_wps_28_Fusion_Reactor_Image_by_M_ywgpid.jpg", 'image', 3], ["0myK3rC_wt7lg6.jpg", 'image', 1], ["unified-field-theory-Converted2-1024x459_mp2yxe.jpg", 'image', 1], ["einstein-rosen-bridge2_m1scx7.jpg", 'image', 1], ["einstein-calendar-oct2015_ewnzyl.jpg", 'image', 1],
  ["20120818_181544_en7b3s.jpg", 'image', 5],
  ["
sustainable_transport_encyclopaedia_p1jdcb.jpg", 'image', 5],
  ["7a_c5snlo.jpg", 'image', 5],
  ["pag38_nj8opf.jpg", 'image', 5],
  ["sustainabletransport_xbajka.gif", 'image', 5],
  ["artificialfictionbrain_gengiskanhg_wikimedia-commons-cc-by-sa-3.0-100411445-primary.idge_cqaobe.png", 'image', 4],
  ["lnkdmap_c6xyow.jpg", 'image', 4]
]

media.each do |link, medium_type, project_id|
  Medium.create(link: link, medium_type: medium_type, project_id: project_id)
end
