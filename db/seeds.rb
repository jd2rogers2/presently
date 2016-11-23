10.times do |i|
  num = i + 1
  string = 'user_' + num.to_s
  date = Date.new(num, num, num)
  User.create(username: string, email: string + '@test.com', password: 'password', bday: date, aboutme: string)
end

9.times do |i|
  Friendship.create(user_id: i + 1, friend_id: i + 2)
  Friendship.create(user_id: i + 2, friend_id: i + 1)
end

10.times do |i|
  List.create(user_id: i + 1)
end

9.times do |i|
  string = 'item_' + (i + 1).to_s
  Item.create(name: string, list_id: i, purchaser_id: i + 1, url: 'url')
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
