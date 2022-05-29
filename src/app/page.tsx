// 导入所需的组件
import Image from "next/image";
import { Button } from "@/components/ui/button";// 导出默认的 Home 组件
export default function Home() {
  return (
    // 整个页面的容器
    <div className="min-h-screen bg-black flex flex-col text-gray-900">      {/* 头部 */}
      <header className="p-4 flex justify-between items-center bg-black">
        <Image src="/favicon.ico" alt="Logo" className="h-8 w-8" />        {/* 导航栏 */}
        <nav className="flex">
          <a href="/register" rel="noopener noreferrer">
            <Button variant="ghost" className="mr-2 text-white flex-1">注册</Button>
          </a>

          <a href="/login" rel="noopener noreferrer">
            <Button variant="ghost" className="mr-2 text-white flex-1">登录</Button>
          </a>
          <a href="https://github.com/aucub/kfile-ui" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="mr-2 text-white flex-1">
              <span className="icon-[uil--github-alt] text-xl"></span>
            </Button>
          </a>
        </nav>
      </header>      {/* 主要内容区域 */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">            {/* 文字内容 */}
            <div className="flex flex-col justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Customizable and Scalable Cloud Disk
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  Convenient, open source, and fully functional, designed to improve your work efficiency.
                </p>
              </div>
            </div>            {/* 按钮 */}
            <div className="flex justify-center">
              <a href="/register" rel="noopener noreferrer">
                <Button variant="secondary" className="w-48">立即尝试</Button>
              </a>
            </div>
          </div>
        </div>
      </section>      {/* 页脚 */}
      <footer className="p-4 bg-black text-white">
        <p className="text-center">© 2023 kfile. All rights reserved.</p>
      </footer>
    </div>
  );
}