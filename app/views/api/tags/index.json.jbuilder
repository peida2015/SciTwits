json.array!(@tags) do |tag|
  json.extract! tag, :name, :id
  json.projects tag.projects
  # debugger
  json.created time_ago_in_words(tag.created_at)
  json.updated time_ago_in_words(tag.updated_at)
end
