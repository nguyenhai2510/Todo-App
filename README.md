# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Hook trong React
 1. chỉ gọi hooks ở top-level component
 2. chỉ gọi hooks trong React function component
 3. chỉ gọi hooks trong custom hooks
 4. không gọi hooks trong vòng lặp, điều kiện, hàm thông thường
 5. không gọi hooks trong class component
 6. không gọi hooks trong component con
 7. không gọi hooks trong component cha
 8. không gọi hooks trong component cha của component con

# React Hooks
  Hooks state: là một hàm đặc biệt trong React cho phép bạn sử dụng state và các tính năng khác của React mà không cần phải viết class component. Hooks được giới thiệu trong React 16.8 và giúp bạn quản lý state, lifecycle, và các tính năng khác một cách dễ dàng hơn trong function component.
  - useState: dùng để quản lý state trong function component
  - useReducer: dùng để quản lý state phức tạp hơn, tương tự như Redux
  - useContext: dùng để quản lý state toàn cục, tương tự như Redux Provider
  - useRef: dùng để truy cập trực tiếp vào DOM element, không
  - useMemo: dùng để tối ưu hóa hiệu suất, tránh tính toán lại giá trị khi không cần thiết
  - useCallback: dùng để tối ưu hóa hiệu suất, tránh tạo lại hàm khi không cần thiết


# useSate trong React
  - useState là một hook trong React cho phép bạn quản lý state trong function component.
  - useState trả về một mảng gồm hai phần tử: giá trị hiện tại của state và hàm để cập nhật giá trị của state.
  - Hàm cập nhật state sẽ kích hoạt lại quá trình render của component, giúp hiển thị giá trị mới.
  - Bạn có thể sử dụng useState để quản lý các loại dữ liệu khác nhau như chuỗi, số, mảng, đối tượng, v.v.
  - useState có thể được sử dụng nhiều lần trong cùng một component để quản lý nhiều state khác nhau.
Lưu ý: 
    - Khi sử dụng useState, bạn nên đặt giá trị khởi tạo của state trong hàm useState, không nên đặt giá trị khởi tạo trực tiếp trong component.
    - Khi cập nhật state, bạn nên sử dụng hàm cập nhật state để đảm bảo quá trình render được kích hoạt lại.
   
