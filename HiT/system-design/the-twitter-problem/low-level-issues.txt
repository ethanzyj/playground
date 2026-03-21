# Low-level Issues

Source: https://www.hiredintech.com/system-design/the-twitter-problem/low-level-issues/

Let's assume we've shaped the main parts of our Twitter-like application. In a real interview this would have been a discussion with the interviewer. It is ok to have to clarify things. It is also normal to not get everything right the first time. Be prepared to accept suggestions from the interviewer.


## Database schema

Tables needed:

### Table users
- ID (id), username (username), full name (first_name & last_name)
- password fields (password_hash & password_salt)
- timestamps (created_at & updated_at), description

### Table tweets
- ID (id), content (content), created_at, user_id (author)

### Table connections (follows)
- follower_id, followee_id, created_at

### Table likes
- user_id, tweet_id, created_at

### Indexes needed:
- users: index on username (for lookups by username)
- tweets: index on user_id (fetch tweets by user)
- connections: index on follower_id AND index on followee_id
- likes: index on user_id AND index on tweet_id

Note: indexes slow down writes slightly, but the read benefits at our data scale far outweigh this cost.


## Building a RESTful API

Example endpoints:

```
GET /api/users/<username>                    - user profile
GET /api/users/<username>/tweets?page=4      - paginated tweets
GET /api/users/<username>/followers          - followers
GET /api/users/<username>/following          - following
GET /api/users/<username>/likes              - liked tweets
POST /api/users/<username>/tweets            - create tweet
POST /api/users/<username>/follow            - follow user
POST /api/tweets/<tweet_id>/likes            - like tweet
DELETE /api/tweets/<tweet_id>/likes           - unlike tweet
```


---

# 底层问题

来源：https://www.hiredintech.com/system-design/the-twitter-problem/low-level-issues/

假设我们已经塑造了类Twitter应用的主要部分。在真实面试中，这将是与面试官的讨论。需要澄清事情是正常的。第一次不可能把所有事情都做对也是正常的。准备好接受面试官的建议。


## 数据库模式

需要的表：

### 用户表 (users)
- ID (id)、用户名 (username)、全名 (first_name & last_name)
- 密码字段 (password_hash & password_salt)
- 时间戳 (created_at & updated_at)、描述

### 推文表 (tweets)
- ID (id)、内容 (content)、创建时间 (created_at)、用户ID (user_id，作者)

### 关注表 (connections)
- 关注者ID (follower_id)、被关注者ID (followee_id)、创建时间 (created_at)

### 点赞表 (likes)
- 用户ID (user_id)、推文ID (tweet_id)、创建时间 (created_at)

### 需要的索引：
- users：在username上建索引（用于按用户名查询）
- tweets：在user_id上建索引（获取用户的推文）
- connections：在follower_id上建索引，在followee_id上也建索引
- likes：在user_id上建索引，在tweet_id上也建索引

注意：索引会稍微减慢写入速度，但在我们的数据规模下，读取带来的好处远远超过这个成本。


## 构建RESTful API

API端点示例：

```
GET /api/users/<username>                    - 用户资料
GET /api/users/<username>/tweets?page=4      - 分页推文
GET /api/users/<username>/followers          - 粉丝列表
GET /api/users/<username>/following          - 关注列表
GET /api/users/<username>/likes              - 点赞的推文
POST /api/users/<username>/tweets            - 创建推文
POST /api/users/<username>/follow            - 关注用户
POST /api/tweets/<tweet_id>/likes            - 点赞推文
DELETE /api/tweets/<tweet_id>/likes           - 取消点赞
```
