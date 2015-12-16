json.array!(@projects) do |project|
  json.extract! project, :id, :title, :description, :owner_id, :field_id, :significance, :subfield
  json.url project_url(project, format: :json)
end
