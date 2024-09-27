export interface Product {
  _id: string // ID của sản phẩm
  images: string[] // Mảng các URL hình ảnh của sản phẩm
  price: number // Giá hiện tại của sản phẩm
  rating: number // Điểm đánh giá của sản phẩm
  price_before_discount: number // Giá trước khi giảm giá (nếu có)
  quantity: number // Số lượng sản phẩm còn lại trong kho
  sold: number // Số lượng sản phẩm đã bán
  view: number // Lượt xem của sản phẩm
  name: string // Tên của sản phẩm
  description: string // Mô tả sản phẩm
  category: {
    // Thông tin về danh mục của sản phẩm
    _id: string // ID của danh mục
    name: string // Tên của danh mục
  }
  image: string // URL của hình ảnh chính của sản phẩm
  createdAt: string // Thời gian tạo sản phẩm (định dạng ISO 8601)
  updatedAt: string // Thời gian cập nhật gần nhất của sản phẩm
}

export interface ProductList {
  products: Product[] // Mảng chứa các sản phẩm
  pagination: {
    // Thông tin về phân trang
    page: number // Trang hiện tại
    limit: number // Số lượng sản phẩm trên mỗi trang
    page_size: number // Tổng số trang
  }
}

export interface ProductListConfig {
  page?: number | string // Trang hiện tại (dùng cho phân trang)
  limit?: number | string // Số lượng sản phẩm trên mỗi trang
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price' // Tiêu chí sắp xếp (ngày tạo, lượt xem, số lượng bán, giá)
  order?: 'asc' | 'desc' // Thứ tự sắp xếp: tăng dần hoặc giảm dần
  exclude?: string // Loại trừ sản phẩm có ID nhất định
  rating_filter?: number | string // Bộ lọc sản phẩm theo điểm đánh giá
  price_max?: number | string // Bộ lọc theo giá tối đa
  price_min?: number | string // Bộ lọc theo giá tối thiểu
  name?: string // Tìm kiếm sản phẩm theo tên
  category?: string //Tìm kiếm theo danh mục SP
}
