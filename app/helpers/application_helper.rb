module ApplicationHelper
  def auth_token
    html = <<-html
      <input type="hidden"
        name="authenticity_token"
        value=#{form_authenticity_token}>
    html

    html.html_safe
  end
end
