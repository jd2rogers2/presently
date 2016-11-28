10.times do |i|
  num = i + 1
  string = 'user_' + num.to_s
  date = Date.new(num + 2000, num, num)
  User.create(username: string, email: string + '@test.com', password: 'password', bday: date, aboutme: string)
end

10.times do |i|
  num = i + 1
  Friendship.create(user_id: num, friend_id: num + 1)
end

# user model has after_create :list
# 10.times do |i|
#   List.create(user_id: i + 1)
# end

10.times do |i|
  num = i + 1
  string = 'item_' + (num).to_s
  Item.create(name: string, list_id: num, purchaser_id: num + 1, url: 'www.url.com', notes: "i really want this one guys", price: num + 20)
  Item.create(name: string + num.to_s, list_id: num, purchaser_id: nil, url: 'www.url.com', notes: "i really really want this one guys", price: num + 200)
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
