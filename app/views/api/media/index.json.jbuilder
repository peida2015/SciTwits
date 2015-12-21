json.array!(@media) do |medium|
  json.extract! medium, :id, :project_id, :link, :medium_type
  # debugger
  json.created time_ago_in_words(medium.created_at)
  json.updated time_ago_in_words(medium.updated_at)
end
