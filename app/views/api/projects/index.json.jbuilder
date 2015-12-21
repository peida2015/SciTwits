json.array!(@projects) do |project|
  json.extract! project, :id, :title, :description, :owner_id, :field_id, :significance, :subfield
  # debugger
  json.owner project.owner.username
  json.created time_ago_in_words(project.created_at)
  json.updated time_ago_in_words(project.updated_at)
  json.url api_project_url(project, format: :json)
end
