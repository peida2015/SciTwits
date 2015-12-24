debugger
json.extract! @tagging[0], :project_id, :tag_id

json.created time_ago_in_words(@tagging[0].created_at)
json.updated time_ago_in_words(@tagging[0].updated_at)
