import { useTranslation } from "react-i18next";
import {
  BlogCard,
  BlogCardBody,
  BlogCardFooter,
  BlogContainer,
  BlogHeading,
  BlogThumbnail,
} from "./Blogs.styled";
import { IoIosArrowForward } from "react-icons/io";

const Blogs = () => {
  const { t } = useTranslation(["home"]);
  return (
    <section>
      <BlogHeading>{t("Featured articles")}</BlogHeading>
      <BlogContainer>
        <BlogCard>
          <BlogThumbnail>
            <img src="/assets/images/blog-1.png" alt="blog1" />
          </BlogThumbnail>
          <BlogCardBody>
            <div className="card-title">
              ITviec releases “IT Salary Report 2023-2024: Data-driven for
              better decision making”
            </div>
            <p>
              Đọc bản tiếng Việt tại đây. ITviec is excited to announce the
              launch of our IT salary report: “Salary & Job Expectation of IT
              Professionals...
            </p>
          </BlogCardBody>
          <BlogCardFooter>
            <span>{t("Start reading")}</span>
            <IoIosArrowForward />
          </BlogCardFooter>
        </BlogCard>
        <BlogCard>
          <BlogThumbnail>
            <img src="/assets/images/blog-2.jpg" alt="blog2" />
          </BlogThumbnail>
          <BlogCardBody>
            <div className="card-title">
              Salesforce là gì? Vì sao lập trình viên cần quan tâm đến
              Salesforce?
            </div>
          </BlogCardBody>
          <BlogCardFooter>
            <span>{t("Start reading")}</span>
            <IoIosArrowForward />
          </BlogCardFooter>
        </BlogCard>
        <BlogCard>
          <BlogThumbnail>
            <img src="/assets/images/blog-3.jpg" alt="blog3" />
          </BlogThumbnail>
          <BlogCardBody>
            <div className="card-title">
              Tất tần tật về 502 Bad Gateway và những cách khắc phục hiệu quả
            </div>
          </BlogCardBody>
          <BlogCardFooter>
            <span>{t("Start reading")}</span>
            <IoIosArrowForward />
          </BlogCardFooter>
        </BlogCard>
        <BlogCard>
          <BlogThumbnail>
            <img src="/assets/images/blog-4.png" alt="blog4" />
          </BlogThumbnail>
          <BlogCardBody>
            <div className="card-title">
              Công ty thuộc ngành nghề, loại hình nào đang trả lương IT ở Việt
              Nam cao nhất?
            </div>
          </BlogCardBody>
          <BlogCardFooter>
            <span>{t("Start reading")}</span>
            <IoIosArrowForward />
          </BlogCardFooter>
        </BlogCard>
        <BlogCard>
          <BlogThumbnail>
            <img src="/assets/images/blog-5.jpg" alt="blog5" />
          </BlogThumbnail>
          <BlogCardBody>
            <div className="card-title">
              CV gồm những gì? 3 cấu trúc CV chuẩn nhất cho ứng viên IT
            </div>
          </BlogCardBody>
          <BlogCardFooter>
            <span>{t("Start reading")}</span>
            <IoIosArrowForward />
          </BlogCardFooter>
        </BlogCard>
      </BlogContainer>
    </section>
  );
};

export default Blogs;
