json.extract! @twit, :body, :project_id, :id
json.user_id @twit.user.id
json.user @twit.user.username
