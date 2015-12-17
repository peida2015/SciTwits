json.owner @project.owner.username
# debugger
json.created time_ago_in_words(@project.created_at)
json.extract! @project, :id, :title, :description, :field_id, :significance, :subfield, :updated_at
json.title @project.title
