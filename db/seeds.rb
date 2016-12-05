month_day = 1

100.times do |i|
  num = i + 1
  string = 'user_' + num.to_s
  date = Date.new(num + 2000, month_day, month_day)
  User.create(username: string, email: string + '@email.com', password: 'password', bday: date, aboutme: string)
  month_day += 1
  month_day == 12 ? month_day = 1 : nil
end

User.create(username: 'show_user', email: 'show_user@email.com', password: 'show_user', bday: Date.new(2016, 12, 5), aboutme: "i'm a test user to show people around the app")

100.times do |i|
  num = i + 1
  Friendship.create(user_id: num, friend_id: num + 1)
end

100.times do |i|
  num = i + 1
  string = 'item_' + num.to_s
  Item.create(name: string, list_id: num, purchaser_id: 5, url: 'www.url.com', notes: "i really want this one guys", price: num + 20)
  Item.create(name: string + num.to_s, list_id: num, purchaser_id: User.find_by(username: 'show_user').id, url: 'www.url.com', notes: "i really really want this one guys", price: num + 200)
  Item.create(name: string + num.to_s + num.to_s, list_id: num, purchaser_id: User.find_by(username: 'show_user').id, url: 'www.url.com', notes: "for f's sake, please!", price: num * 10)
end

1000.times do |i|
  num = i + 1
  string = 'infinite_scroll item # ' + num.to_s
  Item.create(name: string, list_id: 101, purchaser_id: nil, url: 'www.url.com', notes: string + ' notes', price: num * 10)
end

User.all.each do |x|
  if x.id % 2 == 0
    Friendship.create(user_id: User.find_by(username: 'show_user').id, friend_id: x.id)
  end
end

# notes for final seed
# don't be friends with everyone but have a lot
# Event.create(name: 'event1', photo: File.new("image/to/path.jpg"))
