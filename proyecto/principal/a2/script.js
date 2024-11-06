//1.đăng nhập
//-Nhập vào email, password từ bàn phím. Nếu không nhập đủ thông tin → In ra “Hãy nhập đầy đủ thông tin”.
//Tìm trong dữ liệu users có user thỏa mãn email, password.
//+Nếu có user, in ra màn hình “Xin chào” + <tên đầy đủ của user đó>
//+Nếu không có user, in ra màn hình “Thông tin tài khoản không chính xác”.

function login() {
  let email = prompt("nhap email: ");
  let password = prompt("nhap mat khau: ");

  if (!email || !password) {
    console.log("Hay nhap day du thong tin");
    return;
  }
  let user = user.find((u) => u.email === email && u.password === password);
  if (user) {
    console.log(`Xin chào ${user.first_name} ${user.last_name}`);
  } else {
    console.log("Thông tin tài khoản không chính xác.");
  }
}
login();
//2.đăng ký
//-Nhập vào first_name, last_name, email, password từ bàn phím. Nếu không nhập đủ thông tin → In ra “Hãy nhập đầy đủ thông tin”.
//Tìm trong dữ liệu users có user có email đã nhập.
//    +Nếu có user, in ra màn hình “Email này đã có tài khoản”.
//    +Nếu không có user, thêm vào dữ liệu user những thông tin đã nhập. Id của user mới là số tự tăng và không trùng với user khác.
function register() {
  let firstname = prompt("nhao vao first name: ");
  let lastname = prompt("nhap vao last name: ");
  let email = prompt("Nhập email:");
  let password = prompt("Nhập password:");

  if (!firstname || !lastname || !email || !password) {
    console.log("hay nhap day du thong tin: ");
    return;
  }
  let existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    console.log("email nay da co tai khoang");
  } else {
    let newUser = {
      id: users.length + 1,
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
    };
    users.push(newUser);
    console.log("dang ky thanh cong");
  }
}
register();
//3. Xây dựng chức năng xem danh sách users
//-Nhập vào keyword. Hãy in ra những users có họ và tên hoặc email chứa keyword. Mỗi users hiển thị id, họ và tên, email.
//    +Nếu keyword trống → In ra toàn bộ users
function searchUsers() {
  let keyword = prompt(
    "Nhập từ khóa tìm kiếm (để trống nếu muốn xem toàn bộ users):"
  );

  let filteredUsers = users.filter(
    (user) =>
      user.first_name.includes(keyword) ||
      user.last_name.includes(keyword) ||
      user.email.includes(keyword)
  );
  if (filteredUsers.length === 0) {
    console.log("khong tim thay users ");
  } else {
    console.log("danh sach user: ");
    filteredUsers.forEach((user) => {
      console.log(
        `ID: ${user.id}, Ho va ten: ${user.first_name} ${user.last_name}, Email: ${user.email} `
      );
    });
  }
}
searchUsers();

//4.chuch nang xem danh sach post
//-Hiển thị danh sách các posts, mỗi post bao gồm ID, title, ngày tạo, họ và tên người tạo.
function viewPost() {
  console.log("Danh sach cac post: ");
  posts.forEach((post) => {
    let user = users.find((u) => u.id === post.user_id);
    console.log(
      `ID: ${post.id}, Title: ${post.title}, Ngày tạo: ${post.created_at}, Người tạo: ${user.first_name} ${user.last_name}`
    );
  });
}
//5. Xây dựng chức năng xem chi tiết 1 post.
//-Nhập vào ID của post. Hãy hiển thị thông tin của 1 post có ID tương ứng: ID, tiêu đề, nội dung, link ảnh, tên người tạo, ngày tạo, ngày sửa đổi
function viewPostDetail() {
  let postId = prompt("nhap Id de xem chi tiet post");

  let post = posts.find((p) => (p.id = parseInt(postId)));

  if (post) {
    let user = users.find((u) => u.id === post.user_id);
    console.log(
      `ID: ${post.id}, Tiêu đề: ${post.title}, Nội dung: ${post.content}, Link ảnh: ${post.image}, Người tạo: ${user.first_name} ${user.last_name}, Ngày tạo: ${post.created_at}, Ngày sửa đổi: ${post.updated_at}`
    );
  } else {
    console.log("khong tim thay post theo id da nhap");
  }
}
viewPostDetail();

//6. Xây dựng chức năng tìm kiếm post theo user.
//-Nhập vào email của 1 user. Hãy tìm kiếm các posts của user đó và hiển thị dưới dạng danh sách.

function searchPostByEmail() {
  let userEmail = prompt("nhap email cua user de tim post: ");

  let user = users.find((u) => u.email === userEmail);

  if (!user) {
    console.log("khong tim thay email cua user");
    return;
  }
  let userPosts = posts.filter((post) => post.user_id === user.id);

  if (userPosts.length === 0) {
    console.log(`User ${user.first_name} ${user.last_name} chua co post nao`);
  } else {
    console.log(
      `Danh sach cac bai viet cua ${user.first_name} ${user.last_name}`
    );
    userPosts.forEach((post) => {
      console.log(
        `ID: ${post.id}, title: ${post.title}, ngay tao: ${post.created_at}`
      );
    });
  }
}
searchPostByEmail();
