class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def to_turbo_frame_id
    "#{self.class.name.underscore}_#{new_record? ? 'new' : id}"
  end
end
