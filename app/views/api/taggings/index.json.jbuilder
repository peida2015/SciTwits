json.array!(@taggings) do |tagging|
  json.extract! tagging, :project_id, :tag_id
  # debugger
  json.created time_ago_in_words(tagging.created_at)
  json.updated time_ago_in_words(tagging.updated_at)
end
