100.times do |i|
  num = i + 1
  string = 'user_' + num.to_s
  date = Date.new(num + 2000, 2, 2)
  User.create(username: string, email: string + '@email.com', password: 'password', bday: date, aboutme: string)
end

10.times do |i|
  num = i + 1
  Friendship.create(user_id: num, friend_id: num + 1)
end

10.times do |i|
  num = i + 1
  string = 'item_' + num.to_s
  Item.create(name: string, list_id: num, purchaser_id: 11, url: 'www.url.com', notes: "i really want this one guys", price: num + 20)
  Item.create(name: string + num.to_s, list_id: num, purchaser_id: 11, url: 'www.url.com', notes: "i really really want this one guys", price: num + 200)
  Item.create(name: string + num.to_s + num.to_s, list_id: num, purchaser_id: 11, url: 'www.url.com', notes: "for f's sake, please!", price: num * 10)
end

User.create(username: 'infinite_scroll', email: 'infinite_scroll@email.com', password: 'password', bday: Date.new(1990, 2, 24), aboutme: "i'm a test user for infinite scroll, i have lot's of items on my list")

1000.times do |i|
  num = i + 1
  string = 'infinite_scroll item # ' + num.to_s
  Item.create(name: string, list_id: 101, purchaser_id: nil, url: 'www.url.com', notes: string + ' notes', price: num * 10)
end

User.all.each do |x|
  Friendship.create(user_id: User.find_by(username: 'infinite_scroll').id, friend_id: x.id)
end