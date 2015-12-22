json.array!(@twits) do |twit|
  json.extract! twit, :id, :project_id, :body
  json.user twit.user.username
  # debugger
  json.created time_ago_in_words(twit.created_at)
  json.updated time_ago_in_words(twit.updated_at)
end
