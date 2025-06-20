import { blogsAR, blogsBN, blogsEN } from "@/constants/blogs";
import { eventsAR, eventsBN, eventsEN } from "@/constants/events";
import { dataAR, dataBN, dataEN } from "@/constants/keyData";
import { serveEN, serveBN, serveAR } from "@/constants/serve";
import { videos } from "@/constants/videos";
import NextImage from "@/hooks/NextImage";
import useLanguage from "@/hooks/useLanguage";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import styles from "@/styles/Home.module.scss";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IoLocationSharp } from "react-icons/io5";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Donation from "@/modules/donation";
import GetInvolved from "@/modules/getInvolved";

export default function Home() {
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let serve, blogs, events, data;

  switch (selectedLanguage) {
    case "en":
      serve = serveEN;
      blogs = blogsEN;
      events = eventsEN;
      data = dataEN;
      break;
    case "ar":
      serve = serveAR;
      blogs = blogsAR;
      events = eventsAR;
      data = dataAR;
      break;
    default:
      serve = serveBN;
      blogs = blogsBN;
      events = eventsBN;
      data = dataBN;
  }

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Welcome to Hefazat-e-Islam — Guardians of Islamic Values</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <NextImage
              className={styles.video}
              src={"/images/bg.gif"}
              alt={""}
            />
          </Container>
        </section>
        <Donation />
        <section className={styles.welcome}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.content}>
                <NextImage
                  className={styles.logo}
                  src={"/images/logo.jpg"}
                  alt={""}
                />
                <h2>{t("Who We Are")}</h2>
                <p>
                  {t("Who We Are Des")} <br />
                  {t("Who We Are Des Two")}
                </p>
              </div>
              <div className={styles.image}>
                <div className={styles.inner}>
                  <NextImage src={"/images/image1.jpg"} alt={""} />
                  <NextImage src={"/images/image2.jpg"} alt={""} />
                </div>
                <NextImage src={"/images/image3.jpg"} alt={""} />
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.vission} id="vision">
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>{t("Our Mission")}</h2>
              <p>{t("Our Mission Des")}</p>
            </div>
          </Container>
        </section>
        <section className={styles.ameer}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("Message from Ameer")}</h2>
            </div>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/ameer.jpg"} alt={""} />
              </div>
              <div className={styles.content}>
                <h3>
                  <span>{t("Allama Junaid Babunagari")}</span>
                  {t("Ameer, Hefazat-e-Islam Bangladesh")}
                </h3>
                <h4>{t("Message Title")}</h4>
                <p>
                  {t("Message Des")}
                  <br />
                  {t("Message Des Two")}
                  <br />
                  {t("Message Des Three")}
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.progress}>
          <Container>
            <h2> {t("Stories & Speeches")}</h2>
            <div className={styles.row}>
              {videos.map((category, index) => (
                <div className={styles.videos} key={index}>
                  <iframe
                    src={category.video}
                    // width="560"
                    // height="314"
                    // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              ))}
            </div>
            <div className={styles.btn}>
              <Link href="">{t("See All Videos")}</Link>
            </div>
          </Container>
        </section>

        <section className={styles.ongoingProjects} id="projects">
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("Our Commitment to Serve")} </h2>
            </div>
            <div className={styles.row}>
              {serve.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.icon}>
                    <h3>{category.icon}</h3>
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.projects} id="key">
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("Ongoing Projects")}</h2>
              <p>{t("Ongoing Projects Des")}</p>
            </div>
            <div className={styles.row}>
              {data.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage src={category.image} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.events}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Events")}</h2>
              <p>{t("Events Des")}</p>
            </div>
            <div className={styles.eventsWrapper}>
              {events.slice(0, 4).map((event) => (
                <div className={styles.event} key={event.id}>
                  <div className={styles.image}>
                    <NextImage src={event.image} alt={event.title} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>
                      <h3>{event.date}</h3>
                      <h4>{event.title}</h4>
                    </div>
                    <div className={styles.des}>
                      <span>{event.description}</span>
                    </div>
                    <div className={styles.location}>
                      <IoLocationSharp /> {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.btn}>
              <Link href="">{t("See All Events")}</Link>
            </div>
          </Container>
        </section>
        <section className={styles.blogs}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Blogs")}</h2>
            </div>
            <div className={styles.blogsWrapper}>
              {blogs.slice(0, 4).map((blog) => (
                <div className={styles.blog} key={blog.id}>
                  <div className={styles.image}>
                    <NextImage src={blog.image} alt={blog.name} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>
                      <h3>{blog.date}</h3>
                      <h4>{blog.name}</h4>
                    </div>
                    <div className={styles.des}>
                      <span>{blog.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.btn}>
              <Link href="">{t("See All Blogs")}</Link>
            </div>
          </Container>
        </section>
        <GetInvolved />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? "bn", ["common"])),
    },
  };
};
