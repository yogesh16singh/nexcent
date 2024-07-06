import Footer from "@/components/footer";
import Counts from "@/components/home/counts";
import Hero from "@/components/home/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center ">
        <div className="mt-12 px-3">
          <h1 className="text-4xl text-primary-dgrey text-center font-semibold dark:text-foreground/90">
            Our Clients
          </h1>
          <p className="text-primary-grey text-center mt-2 dark:text-foreground/70">
            We have been working with some Fortune 500+ clients
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-x-24 xl:gap-x-32 mt-8">
            <Image
              src="/company-logos/logo-1.svg"
              alt="Company Logo"
              width={48}
              height={48}
            />
            <Image
              src="/company-logos/logo-2.svg"
              alt="Company Logo"
              width={48}
              height={48}
            />
            <Image
              src="/company-logos/logo-3.svg"
              alt="Company Logo"
              width={48}
              height={48}
            />
            <Image
              src="/company-logos/logo-4.svg"
              alt="Company Logo"
              width={48}
              height={48}
            />
            <Image
              src="/company-logos/logo-5.svg"
              alt="Company Logo"
              width={48}
              height={48}
            />
            <Image
              src="/company-logos/logo-6.svg"
              alt="Company Logo"
              width={48}
              height={48}
            />
            <Image
              src="/company-logos/logo-7.svg"
              alt="Company Logo"
              width={48}
              height={48}
            />
          </div>
        </div>
        <div className="mt-20 px-4">
          <h1 className="text-4xl max-w-xl mx-auto text-primary-dgrey text-center font-semibold dark:text-foreground/90">
            Manage your entire community in a single system
          </h1>
          <p className="text-primary-grey text-center mt-2 dark:text-foreground/70">
            Who is Nextcent suitable for?
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 xl:gap-32 mt-12">
            <div className="shadow-sm dark:shadow-slate-800 flex flex-col items-center py-3 px-8 gap-y-1">
              <svg
                width="65"
                height="56"
                viewBox="0 0 65 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65 38C65 47.9411 56.9411 56 47 56L20 56C17.2386 56 15 53.7614 15 51L15 17C15 11.4772 19.4772 7 25 7L60 7C62.7614 7 65 9.23858 65 12L65 38Z"
                  fill="#E8F5E9"
                />
                <path
                  d="M23.99 10C20.4187 10 17.5114 12.9339 17.5114 16.5203C17.5114 18.7892 18.6765 20.7925 20.4358 21.9602C18.3109 22.6706 16.4723 23.9985 15.1238 25.7357C14.3782 25.1622 13.5451 24.701 12.647 24.3705C14.0089 23.3595 14.8989 21.7353 14.8989 19.91C14.8989 16.8682 12.4388 14.3782 9.41547 14.3782C6.39215 14.3782 3.93208 16.8682 3.93208 19.91C3.93208 21.7364 4.82277 23.3613 6.18579 24.3723C2.57721 25.7039 0 29.1903 0 33.2933V36.1754C0.000369347 36.3951 0.0882567 36.6056 0.244089 36.7604C0.39992 36.9155 0.610779 37.0019 0.830496 37.0011H13.4755C13.5061 37.0045 13.5368 37.0063 13.5674 37.0059H34.4133C34.4439 37.0063 34.4749 37.0045 34.5052 37.0011H47.1511C47.6057 36.9993 47.9739 36.6304 47.975 36.1754V33.2933C47.975 29.1903 45.4022 25.7039 41.7955 24.3719C43.1585 23.3613 44.0492 21.736 44.0492 19.9096C44.0492 16.8679 41.5892 14.3778 38.5658 14.3778C35.5426 14.3778 33.0824 16.8679 33.0824 19.9096C33.0824 21.735 33.9728 23.3594 35.3346 24.3701C34.4347 24.7014 33.6013 25.1641 32.8546 25.739C31.5067 24.0008 29.6707 22.6711 27.5459 21.9602C29.3047 20.7925 30.4703 18.7892 30.4703 16.5203C30.4703 12.9339 27.5614 10 23.9902 10H23.99ZM23.99 11.6544C26.661 11.6544 28.8142 13.822 28.8142 16.5203C28.8142 19.1976 26.6945 21.3442 24.0531 21.3786C24.0321 21.3786 24.0114 21.3756 23.99 21.3756C23.9686 21.3756 23.9483 21.3786 23.9268 21.3786C21.2854 21.3446 19.1672 19.1977 19.1672 16.5203C19.1672 13.8217 21.3186 11.6544 23.9896 11.6544H23.99ZM9.41556 16.0324C11.5348 16.0324 13.2446 17.7525 13.2446 19.9099C13.2446 22.0528 11.557 23.7655 9.45763 23.7887C9.4436 23.7887 9.42994 23.7873 9.41553 23.7873C9.4015 23.7873 9.38784 23.7887 9.37344 23.7887C7.2741 23.7655 5.58647 22.0524 5.58647 19.9099C5.58647 17.7526 7.29623 16.0324 9.4155 16.0324H9.41556ZM38.5653 16.0324C40.6846 16.0324 42.3944 17.7525 42.3944 19.9099C42.3944 22.0528 40.7067 23.7655 38.6074 23.7887C38.5934 23.7887 38.5797 23.7873 38.5653 23.7873C38.5513 23.7873 38.5376 23.7887 38.5232 23.7887C36.4239 23.7655 34.7363 22.0524 34.7363 19.9099C34.7363 17.7526 36.446 16.0324 38.5653 16.0324H38.5653ZM23.9266 23.0328C23.9477 23.0332 23.9684 23.0358 23.9898 23.0358C24.0108 23.0358 24.0315 23.0328 24.0529 23.0328C29.3502 23.0668 33.5896 27.3427 33.5896 32.6952L33.5892 35.3511H14.3911V32.6952C14.3911 27.3422 18.6293 23.0669 23.9259 23.0328H23.9266ZM9.35223 25.445C9.37327 25.4454 9.39395 25.4479 9.41537 25.4479C9.43679 25.4479 9.4571 25.445 9.47852 25.445C11.2702 25.4594 12.9054 26.0772 14.2074 27.1108C13.2757 28.7593 12.7369 30.6621 12.7369 32.6957V35.3452H1.65369V33.2932C1.65369 28.9431 5.07396 25.4789 9.35203 25.4446L9.35223 25.445ZM38.502 25.445C38.5234 25.4454 38.5437 25.4479 38.5652 25.4479C38.5866 25.4479 38.6069 25.445 38.6283 25.445C42.9064 25.479 46.3266 28.9435 46.3266 33.2935V35.3452H35.2377L35.2374 32.6957C35.2374 30.6632 34.7001 28.7618 33.7702 27.1137C35.0726 26.0787 36.7089 25.4594 38.5021 25.445H38.502Z"
                  fill="#103E13"
                />
              </svg>

              <h2 className="text-3xl text-primary-dgrey font-semibold text-center dark:text-foreground/90">
                Membership <br />
                Organisations
              </h2>

              <p className="text-primary-grey mt-2 text-center text-sm dark:text-foreground/70">
                Our membership management software <br /> provides full
                automation of membership <br /> renewals and payments
              </p>
            </div>
            <div className="shadow-sm dark:shadow-slate-800 flex flex-col items-center py-3 px-12 gap-y-1">
              <svg
                width="66"
                height="56"
                viewBox="0 0 66 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.5 38C65.5 47.9411 57.4411 56 47.5 56L20.5 56C17.7386 56 15.5 53.7614 15.5 51L15.5 17C15.5 11.4772 19.9772 7 25.5 7L60.5 7C63.2614 7 65.5 9.23858 65.5 12L65.5 38Z"
                  fill="#E8F5E9"
                />
                <path
                  d="M27.4164 19.0109C27.1044 19.0109 26.8507 18.7576 26.8507 18.4452V17.4839C26.8507 17.1719 27.104 16.9182 27.4164 16.9182C27.7284 16.9182 27.9821 17.1715 27.9821 17.4839V18.4452C27.9821 18.7576 27.7284 19.0109 27.4164 19.0109Z"
                  fill="#103E13"
                />
                <path
                  d="M25.0381 19.0109C24.7261 19.0109 24.4724 18.7576 24.4724 18.4452V17.4839C24.4724 17.1719 24.7257 16.9182 25.0381 16.9182C25.3501 16.9182 25.6038 17.1715 25.6038 17.4839V18.4452C25.6034 18.7576 25.3505 19.0109 25.0381 19.0109Z"
                  fill="#103E13"
                />
                <path
                  d="M22.66 19.0109C22.348 19.0109 22.0944 18.7576 22.0944 18.4452V17.4839C22.0944 17.1719 22.3476 16.9182 22.66 16.9182C22.9721 16.9182 23.2257 17.1715 23.2257 17.4839V18.4452C23.2257 18.7576 22.9725 19.0109 22.66 19.0109Z"
                  fill="#103E13"
                />
                <path
                  d="M27.4164 22.942C27.1044 22.942 26.8507 22.6888 26.8507 22.3763V21.4154C26.8507 21.1034 27.104 20.8497 27.4164 20.8497C27.7284 20.8497 27.9821 21.103 27.9821 21.4154V22.3763C27.9821 22.6888 27.7284 22.942 27.4164 22.942Z"
                  fill="#103E13"
                />
                <path
                  d="M25.0381 22.942C24.7261 22.942 24.4724 22.6888 24.4724 22.3763V21.4154C24.4724 21.1034 24.7257 20.8497 25.0381 20.8497C25.3501 20.8497 25.6038 21.103 25.6038 21.4154V22.3763C25.6034 22.6888 25.3505 22.942 25.0381 22.942Z"
                  fill="#103E13"
                />
                <path
                  d="M22.66 22.942C22.348 22.942 22.0944 22.6888 22.0944 22.3763V21.4154C22.0944 21.1034 22.3476 20.8497 22.66 20.8497C22.9721 20.8497 23.2257 21.103 23.2257 21.4154V22.3763C23.2257 22.6888 22.9725 22.942 22.66 22.942Z"
                  fill="#103E13"
                />
                <path
                  d="M27.4164 26.8733C27.1044 26.8733 26.8507 26.6201 26.8507 26.3076V25.3463C26.8507 25.0343 27.104 24.7806 27.4164 24.7806C27.7284 24.7806 27.9821 25.0339 27.9821 25.3463V26.3076C27.9821 26.6201 27.7284 26.8733 27.4164 26.8733Z"
                  fill="#103E13"
                />
                <path
                  d="M25.0381 26.8733C24.7261 26.8733 24.4724 26.6201 24.4724 26.3076V25.3463C24.4724 25.0343 24.7257 24.7806 25.0381 24.7806C25.3501 24.7806 25.6038 25.0339 25.6038 25.3463V26.3076C25.6034 26.6201 25.3505 26.8733 25.0381 26.8733Z"
                  fill="#103E13"
                />
                <path
                  d="M22.66 26.8733C22.348 26.8733 22.0944 26.6201 22.0944 26.3076V25.3463C22.0944 25.0343 22.3476 24.7806 22.66 24.7806C22.9721 24.7806 23.2257 25.0339 23.2257 25.3463V26.3076C23.2257 26.6201 22.9725 26.8733 22.66 26.8733Z"
                  fill="#103E13"
                />
                <path
                  d="M27.4164 30.8037C27.1044 30.8037 26.8507 30.5505 26.8507 30.2381V29.2767C26.8507 28.9647 27.104 28.7111 27.4164 28.7111C27.7284 28.7111 27.9821 28.9643 27.9821 29.2767V30.2381C27.9821 30.5505 27.7284 30.8037 27.4164 30.8037Z"
                  fill="#103E13"
                />
                <path
                  d="M25.0381 30.8037C24.7261 30.8037 24.4724 30.5505 24.4724 30.2381V29.2767C24.4724 28.9647 24.7257 28.7111 25.0381 28.7111C25.3501 28.7111 25.6038 28.9643 25.6038 29.2767V30.2381C25.6034 30.5505 25.3505 30.8037 25.0381 30.8037Z"
                  fill="#103E13"
                />
                <path
                  d="M22.66 30.8037C22.348 30.8037 22.0944 30.5505 22.0944 30.2381V29.2767C22.0944 28.9647 22.3476 28.7111 22.66 28.7111C22.9721 28.7111 23.2257 28.9643 23.2257 29.2767V30.2381C23.2257 30.5505 22.9725 30.8037 22.66 30.8037Z"
                  fill="#103E13"
                />
                <path
                  d="M27.4164 34.735C27.1044 34.735 26.8507 34.4817 26.8507 34.1693V33.2084C26.8507 32.8964 27.104 32.6427 27.4164 32.6427C27.7284 32.6427 27.9821 32.896 27.9821 33.2084V34.1693C27.9821 34.4813 27.7284 34.735 27.4164 34.735Z"
                  fill="#103E13"
                />
                <path
                  d="M25.0381 34.735C24.7261 34.735 24.4724 34.4817 24.4724 34.1693V33.2084C24.4724 32.8964 24.7257 32.6427 25.0381 32.6427C25.3501 32.6427 25.6038 32.896 25.6038 33.2084V34.1693C25.6034 34.4813 25.3505 34.735 25.0381 34.735Z"
                  fill="#103E13"
                />
                <path
                  d="M22.66 34.735C22.348 34.735 22.0944 34.4817 22.0944 34.1693L22.0948 33.2084C22.0948 32.8964 22.348 32.6427 22.6604 32.6427C22.9725 32.6427 23.2261 32.896 23.2261 33.2084V34.1693C23.2257 34.4813 22.9725 34.735 22.66 34.735Z"
                  fill="#103E13"
                />
                <path
                  d="M6.50047 38.6471C6.50047 38.9592 6.75372 39.2128 7.06615 39.2128H41.5139C41.8259 39.2128 42.0796 38.9596 42.0796 38.6471C42.0796 38.3351 41.8263 38.0815 41.5139 38.0815H40.4682V21.8402C40.4682 21.5281 40.215 21.2745 39.9025 21.2745L30.6668 21.2749V9.56576C30.6668 9.36774 30.5635 9.18471 30.3946 9.08214C30.2262 8.97919 30.0156 8.97287 29.8404 9.06399L19.3401 14.531C19.1527 14.6284 19.0359 14.8217 19.0359 15.0327V25.2604H8.87388C8.56186 25.2604 8.3082 25.5137 8.3082 25.8261V38.0816H7.06489C6.75287 38.0812 6.5 38.3344 6.5 38.6468L6.50047 38.6471ZM30.667 29.8422H39.3374V38.0819L30.667 38.0815V29.8422ZM30.667 25.9113H39.3374V28.7113L30.667 28.7109V25.9113ZM30.667 22.4056H39.3374V24.7808H30.667V22.4056ZM20.1667 15.3762L29.5353 10.4982V38.081H20.1667V15.3762ZM12.2359 33.5635C12.2359 32.3895 13.166 31.4341 14.3096 31.4341C15.4531 31.4341 16.3837 32.3891 16.3837 33.5635V38.0817H12.2359V33.5635ZM9.43952 26.3916H19.0358V38.0815H17.515V33.5633C17.515 31.7657 16.0776 30.303 14.3096 30.303C12.5424 30.303 11.105 31.7653 11.105 33.5633V38.0815H9.43952V26.3916Z"
                  fill="#103E13"
                />
              </svg>

              <h2 className="text-3xl text-primary-dgrey font-semibold text-center dark:text-foreground/90">
                National <br /> Associations
              </h2>

              <p className="text-primary-grey mt-2 text-center text-sm dark:text-foreground/70">
                Our membership management <br /> software provides full
                automation of <br />
                membership renewals and <br /> payments
              </p>
            </div>
            <div className="shadow-sm dark:shadow-slate-800 flex flex-col items-center py-3 px-8 gap-y-1">
              <svg
                width="65"
                height="56"
                viewBox="0 0 65 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65 38C65 47.9411 56.9411 56 47 56L20 56C17.2386 56 15 53.7614 15 51L15 17C15 11.4772 19.4772 7 25 7L60 7C62.7614 7 65 9.23858 65 12L65 38Z"
                  fill="#E8F5E9"
                />
                <path
                  d="M28.3117 23.6446C28.0709 23.6446 27.8473 23.5784 27.6487 23.4719V23.4748C27.6487 23.8536 27.5014 24.2094 27.2343 24.4758C26.9671 24.743 26.6116 24.8903 26.2332 24.8903C25.9889 24.8903 25.7625 24.8224 25.5617 24.7131C25.5415 25.0597 25.4029 25.3836 25.1558 25.631C24.8886 25.8982 24.5331 26.0454 24.1545 26.0454C23.4022 26.0454 22.7913 25.4541 22.7473 24.7129C22.5145 24.8387 22.2513 24.9046 21.9799 24.8872C21.2398 24.8387 20.6603 24.1993 20.6603 23.4312V17.0645L19.9353 18.3205C19.6592 18.8009 19.1423 19.0991 18.5858 19.0991C18.3147 19.0991 18.0468 19.028 17.8095 18.892C17.5141 18.7208 17.3028 18.4458 17.2149 18.1169C17.1265 17.7878 17.1722 17.4436 17.3431 17.1486C17.3433 17.1486 19.715 13.0414 19.8597 12.7891C19.8769 12.7512 19.9259 12.6411 19.9676 12.5474C20.0075 12.4578 20.0416 12.366 20.0744 12.2736C20.7896 10.2543 22.5607 8.99998 24.6966 8.99998C27.4703 8.99998 29.7268 11.4469 29.7268 14.4546L29.727 22.2289C29.727 22.6073 29.58 22.9628 29.3131 23.2302C29.0459 23.4974 28.6904 23.6447 28.3116 23.6447L28.3117 23.6446ZM24.6966 9.75212C22.8613 9.75212 21.3984 10.7888 20.7833 12.5251C20.744 12.6354 20.703 12.7457 20.6552 12.8531C20.5164 13.1643 20.5164 13.1643 20.4773 13.2091L20.4721 13.2046C20.2784 13.57 19.7031 14.5663 17.9943 17.525C17.9241 17.6463 17.9055 17.7872 17.9413 17.922C17.9776 18.0567 18.0645 18.1703 18.1849 18.2398C18.5586 18.4544 19.0703 18.3159 19.2833 17.9448L20.7108 15.4734C20.7961 15.3261 20.9685 15.2538 21.1339 15.2986C21.2983 15.3426 21.4126 15.4918 21.4126 15.6619V23.4314C21.4126 23.798 21.6892 24.1144 22.0292 24.1368C22.2252 24.1471 22.408 24.0814 22.5454 23.9443C22.6702 23.8194 22.739 23.6531 22.739 23.4752V18.3938C22.739 18.186 22.9075 18.0176 23.1153 18.0176C23.3231 18.0176 23.4915 18.1858 23.4915 18.3938L23.4913 24.6302C23.4913 24.9958 23.7889 25.2934 24.1545 25.2934C24.3321 25.2934 24.499 25.2246 24.6241 25.0997C24.7489 24.9746 24.8177 24.8078 24.8177 24.6302V18.3938C24.8177 18.186 24.9859 18.0176 25.194 18.0176C25.4018 18.0176 25.5702 18.1858 25.5702 18.3938L25.57 23.4168V23.4752C25.57 23.8406 25.8675 24.1381 26.2334 24.1381C26.4108 24.1381 26.5772 24.0691 26.703 23.9438C26.8278 23.8191 26.8966 23.6528 26.8966 23.4749V18.3936C26.8966 18.1858 27.0649 18.0173 27.2729 18.0173C27.4807 18.0173 27.6491 18.1855 27.6491 18.3936L27.6487 22.2291C27.6487 22.595 27.9462 22.8925 28.3116 22.8925C28.4895 22.8925 28.6558 22.8235 28.7807 22.6989C28.906 22.5736 28.9746 22.4067 28.9746 22.2291L28.9748 14.4548C28.9748 11.862 27.0557 9.7522 24.6966 9.7522L24.6966 9.75212Z"
                  fill="#103E13"
                />
                <path
                  d="M13.5291 29.048L18.9888 25.7727C19.6471 25.3774 20.4941 25.5454 20.9162 26.1553C21.0703 26.3775 21.149 26.6364 21.1613 26.9001C21.3648 26.7938 21.5863 26.7361 21.8117 26.7361C21.9272 26.7361 22.0431 26.7505 22.1576 26.779C22.5244 26.8706 22.8335 27.0999 23.0279 27.424C23.2225 27.7487 23.2793 28.1291 23.1877 28.4955C23.1031 28.8346 22.8969 29.1199 22.6102 29.3157C22.8107 29.4339 22.9836 29.5953 23.1066 29.8008C23.3012 30.1254 23.358 30.5057 23.2666 30.8725C23.1749 31.2389 22.9457 31.548 22.621 31.7429L22.6192 31.744C22.8161 31.8621 22.986 32.0218 23.1076 32.2242C23.3024 32.5488 23.3592 32.9293 23.2675 33.2961C23.1756 33.6627 22.9464 33.9718 22.6222 34.1664L15.9558 38.1657C14.7116 38.9119 13.2733 39.1694 11.9064 38.8902C10.5272 38.6084 9.38497 37.8157 8.69046 36.6579C7.59138 34.8261 7.75609 32.6619 9.11949 31.0101C9.18192 30.9347 9.24341 30.8579 9.29925 30.7783C9.35839 30.6942 9.42742 30.5952 9.45098 30.5613C9.5921 30.3092 11.8949 26.1603 11.8946 26.1608C12.1272 25.7412 12.563 25.5037 13.0125 25.5039C13.2222 25.5039 13.4349 25.5555 13.6312 25.6644C13.8682 25.7968 14.0673 25.9898 14.2065 26.2223C14.4928 26.6994 14.5029 27.2964 14.2334 27.7796L13.5291 29.048ZM13.5618 26.6091C13.4888 26.4873 13.3884 26.3902 13.2657 26.3214C13.012 26.181 12.6925 26.2724 12.5528 26.5252C10.905 29.4937 10.3434 30.5054 10.1266 30.8654L10.1315 30.8666C10.1134 30.9269 10.1134 30.9269 9.91502 31.2103C9.84764 31.3062 9.77437 31.3983 9.69969 31.489C8.52732 32.9094 8.39119 34.6969 9.33521 36.2709C9.91997 37.2458 10.8864 37.9142 12.0566 38.1531C13.2395 38.3937 14.4863 38.1699 15.5684 37.5206L22.2355 33.5211C22.3876 33.4299 22.4951 33.285 22.538 33.1133C22.5808 32.9417 22.5542 32.7634 22.4628 32.6112C22.2748 32.2979 21.8665 32.1949 21.5532 32.3836L18.2642 34.3568C18.0861 34.4637 17.8548 34.4062 17.748 34.2279C17.6411 34.0498 17.6988 33.8187 17.8769 33.7117L21.1661 31.7386L22.2343 31.0977C22.3865 31.0063 22.4941 30.8614 22.537 30.6901C22.5799 30.5184 22.5533 30.3398 22.4619 30.1878C22.2736 29.8743 21.8653 29.7723 21.5522 29.9603L17.1948 32.5742C17.0163 32.6814 16.7856 32.6235 16.6787 32.4454C16.5717 32.2673 16.6296 32.0361 16.8075 31.9292L22.1554 28.7211C22.3076 28.6296 22.415 28.485 22.4579 28.3132C22.5007 28.1417 22.4741 27.9634 22.3829 27.8112C22.2918 27.6592 22.1469 27.5518 21.9751 27.5089C21.8024 27.466 21.6248 27.4927 21.4731 27.5836L20.4831 28.1775C20.4829 28.1775 20.4829 28.1778 20.4826 28.1778H20.4824L16.1252 30.7917C15.9467 30.8992 15.7158 30.8412 15.6091 30.6629C15.5021 30.4848 15.5601 30.2536 15.7379 30.1467L20.0953 27.5327C20.2475 27.4413 20.3552 27.2964 20.398 27.1251C20.4452 26.9371 20.4094 26.7449 20.2977 26.5837C20.104 26.3036 19.6898 26.2291 19.3758 26.4179L12.7136 30.4146C12.5678 30.5017 12.3809 30.4805 12.2587 30.3625C12.1362 30.2442 12.1086 30.0583 12.1911 29.9097L13.5764 27.4137C13.7154 27.1642 13.71 26.8561 13.5618 26.6092L13.5618 26.6091Z"
                  fill="#103E13"
                />
                <path
                  d="M39.6181 36.6577C38.9238 37.8157 37.7819 38.6083 36.4025 38.8901C35.0353 39.1688 33.5974 38.9117 32.353 38.1656L25.686 34.1661C25.3616 33.9715 25.1321 33.6624 25.0402 33.2953C24.949 32.9289 25.006 32.5484 25.2004 32.2243C25.3217 32.0216 25.4918 31.8619 25.689 31.7439L25.6871 31.7427C25.3627 31.5481 25.1333 31.239 25.0419 30.8724C24.95 30.5058 25.007 30.125 25.2016 29.8004C25.3269 29.5919 25.4987 29.4289 25.6947 29.3132C25.4101 29.1174 25.2051 28.8331 25.1208 28.4957C25.0289 28.1288 25.0859 27.7483 25.2805 27.4242C25.4749 27.0997 25.7842 26.8705 26.1508 26.7789C26.2653 26.7501 26.3815 26.736 26.4965 26.736C26.7222 26.7362 26.9436 26.7935 27.1472 26.9C27.1597 26.6363 27.2381 26.3774 27.3922 26.1552C27.8146 25.5458 28.6609 25.3771 29.3201 25.7726L34.7796 29.0474L34.0759 27.7799C33.8059 27.296 33.8158 26.699 34.1021 26.2216C34.2415 25.9893 34.4408 25.7964 34.679 25.6628C34.8748 25.5544 35.0869 25.5031 35.296 25.5031C35.7453 25.5033 36.1817 25.7403 36.4139 26.1599C37.2235 27.6185 38.7511 30.3694 38.8585 30.5614C38.8813 30.5946 38.9504 30.6936 39.0095 30.7777C39.0658 30.8575 39.1266 30.9339 39.1895 31.0097C40.5527 32.6622 40.7171 34.8262 39.6181 36.6578L39.6181 36.6577ZM38.6091 31.4892C38.5341 31.3985 38.4606 31.3059 38.3937 31.2105C38.1902 30.9217 38.185 30.9141 38.1697 30.8385C37.9317 30.4448 37.3512 29.3997 35.7555 26.5249C35.6156 26.2726 35.2975 26.1805 35.0443 26.3204C34.9196 26.3901 34.8195 26.4874 34.7465 26.6093C34.5985 26.8559 34.5928 27.1641 34.7326 27.4143L36.1174 29.9095C36.2001 30.0584 36.1725 30.2441 36.0503 30.3623C35.9282 30.4808 35.7416 30.5016 35.5951 30.4144L28.9329 26.4177C28.6189 26.2295 28.2049 26.3032 28.0108 26.5836C27.8991 26.7447 27.8635 26.937 27.9102 27.1247C27.9531 27.2963 28.0607 27.4409 28.2132 27.5323C28.2136 27.5326 28.2139 27.533 28.2143 27.5333L32.5703 30.1465C32.7484 30.2535 32.8062 30.4844 32.6992 30.6627C32.5922 30.8406 32.3616 30.8988 32.183 30.7916L26.8352 27.5835C26.6834 27.4925 26.5048 27.4657 26.3333 27.5088C26.1613 27.5517 26.0167 27.6591 25.9255 27.8115C25.8341 27.9635 25.8077 28.1418 25.8501 28.3133C25.893 28.4849 26.0007 28.6297 26.1529 28.7212L27.1935 29.3453L31.5005 31.9293C31.6786 32.0363 31.7363 32.2672 31.6293 32.4455C31.5224 32.6234 31.2917 32.6814 31.1131 32.5744L26.7562 29.9604C26.4429 29.7719 26.0348 29.8742 25.8464 30.188C25.755 30.3402 25.7286 30.5186 25.771 30.6901C25.8139 30.8616 25.9215 31.0062 26.0739 31.0979L27.1422 31.7387L30.4308 33.7119C30.609 33.8188 30.6667 34.0497 30.5597 34.2281C30.4528 34.4059 30.2221 34.4644 30.0435 34.3569L26.7548 32.3838C26.6031 32.2928 26.4252 32.266 26.2528 32.3091C26.0813 32.352 25.9361 32.4594 25.845 32.6114C25.7538 32.7636 25.7272 32.9421 25.7696 33.1134C25.8124 33.2849 25.9201 33.4296 26.0725 33.5212L32.7395 37.5207C33.8214 38.1698 35.0691 38.3945 36.2514 38.1533C37.4213 37.9144 38.3878 37.246 38.9725 36.2711C39.9175 34.6968 39.7816 32.9091 38.6095 31.4892L38.6091 31.4892Z"
                  fill="#103E13"
                />
              </svg>

              <h2 className="text-3xl text-primary-dgrey font-semibold text-center dark:text-foreground/90">
                Clubs And <br /> Groups
              </h2>

              <p className="text-primary-grey mt-2 text-center text-sm dark:text-foreground/70">
                Our membership management software <br /> provides full
                automation of membership <br />
                renewals and payments
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 max-w-6xl px-3">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <Image
              src="/illustration-2.svg"
              alt="Illustration"
              width={441}
              height={328}
              className=""
            />

            <div className="max-w-xl px-4 sm:px-0">
              <h1 className="text-4xl text-primary-dgrey font-semibold dark:text-foreground/90">
                The unseen of spending three years at Pixelgrade
              </h1>
              <p className="text-primary-grey mt-2 text-sm dark:text-foreground/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>

              <Button
                size="lg"
                className="bg-primary-brand h-12 hover:bg-primary-brand/80 mt-8 text-lg font-normal dark:text-foreground"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-20 bg-primary-silver dark:bg-slate-900 w-full">
          <div className="flex flex-col xl:flex-row px-8 sm:px-16 max-w-6xl mx-auto py-16 gap-8 sm:gap-20 xl:gap-52">
            <div>
              <h2 className="text-4xl font-semibold">
                <span className="text-primary-dgrey dark:text-foreground/90">
                  Helping a local
                </span>
                <br />
                <span className="text-primary-brand">
                  business reinvent itself
                </span>
              </h2>
              <p className="mt-3 dark:text-foreground/70">
                We reached here with our hard work and dedication
              </p>
            </div>
            <Counts />
          </div>
        </div>
        <div className="mt-14 max-w-6xl px-3">
          <div className="flex flex-col xl:flex-row gap-20 items-center">
            <Image
              src="/illustration-3.svg"
              alt="Illustration"
              width={441}
              height={433}
            />

            <div className="max-w-xl px-4 sm:px-0">
              <h1 className="text-4xl text-primary-dgrey font-semibold dark:text-foreground/90">
                How to design your site footer like we did
              </h1>
              <p className="text-primary-grey mt-2 text-sm dark:text-foreground/70">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>

              <Button
                size="lg"
                className="bg-primary-brand h-12 hover:bg-primary-brand/80 mt-8 text-lg font-normal dark:text-foreground"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-14 bg-primary-silver dark:bg-slate-900 w-full ">
          <div className="px-8 sm:px-12 xl:px-32 py-8 flex flex-col xl:flex-row items-center justify-center gap-[4.1rem]">
            <Image
              src="/image-1.png"
              alt="Image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[23rem] h-[23rem]"
            />

            <div className="max-w-4xl">
              <p className="text-primary-grey -mt-6 font-medium dark:text-foreground/70">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h3 className="text-primary-brand text-xl font-bold mt-4">
                Tim Smith
              </h3>
              <p className="text-primary-grey font-light dark:text-foreground/70">
                British Dragon Boat Racing Association
              </p>

              <div className="flex flex-wrap items-center gap-8 mt-6">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.399048"
                    width="48"
                    height="48"
                    rx="8"
                    fill="#E8F5E9"
                  />
                  <g clip-path="url(#clip0_22_772)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.3533 0.593567C15.8761 0.593567 20.3533 5.07072 20.3533 10.5936V0.593567H30.3533C35.8761 0.593567 40.3533 5.07072 40.3533 10.5936C40.3533 16.1164 35.8761 20.5936 30.3533 20.5936C35.8761 20.5936 40.3533 25.0708 40.3533 30.5936C40.3533 33.3359 39.2494 35.8204 37.4618 37.627L37.4244 37.6647L37.3912 37.6977C35.5842 39.4879 33.0979 40.5936 30.3533 40.5936C27.6274 40.5936 25.1562 39.5029 23.3523 37.7341C23.3289 37.7111 23.3055 37.6879 23.2822 37.6647C23.2603 37.6428 23.2385 37.6208 23.2168 37.5987C21.4457 35.7945 20.3533 33.3216 20.3533 30.5936C20.3533 36.1164 15.8761 40.5936 10.3533 40.5936C4.83048 40.5936 0.353333 36.1164 0.353333 30.5936V20.5936H10.3533C4.83048 20.5936 0.353333 16.1164 0.353333 10.5936C0.353333 5.07072 4.83048 0.593567 10.3533 0.593567ZM18.3533 10.5936C18.3533 15.0119 14.7716 18.5936 10.3533 18.5936V2.59357C14.7716 2.59357 18.3533 6.17529 18.3533 10.5936ZM38.3533 30.5936C38.3533 26.1753 34.7716 22.5936 30.3533 22.5936C25.935 22.5936 22.3533 26.1753 22.3533 30.5936H38.3533ZM2.35333 22.5936V30.5936C2.35333 35.0119 5.93505 38.5936 10.3533 38.5936C14.7716 38.5936 18.3533 35.0119 18.3533 30.5936V22.5936H2.35333ZM22.3533 18.5936V2.59357H30.3533C34.7716 2.59357 38.3533 6.17529 38.3533 10.5936C38.3533 15.0119 34.7716 18.5936 30.3533 18.5936H22.3533Z"
                      fill="#5417D7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_772">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(0.353333 0.593567)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <Image
                  src="/company-logos/logo-2.svg"
                  alt="Company Logo"
                  width={48}
                  height={48}
                />
                <Image
                  src="/company-logos/logo-3.svg"
                  alt="Company Logo"
                  width={48}
                  height={48}
                />
                <Image
                  src="/company-logos/logo-4.svg"
                  alt="Company Logo"
                  width={48}
                  height={48}
                />
                <Image
                  src="/company-logos/logo-5.svg"
                  alt="Company Logo"
                  width={48}
                  height={48}
                />
                <Image
                  src="/company-logos/logo-6.svg"
                  alt="Company Logo"
                  width={48}
                  height={48}
                />

                <a
                  href="#"
                  className="flex items-center text-primary-brand font-bold text-xl gap-4"
                >
                  Meet all customers
                  <span>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                        stroke="#4CAF4F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl text-primary-dgrey text-center font-semibold dark:text-foreground/90">
            Caring is the new marketing
          </h1>
          <p className="text-primary-grey text-center mt-2 max-w-2xl px-6 mx-auto dark:text-foreground/70">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who&apos;s joining the
            community, read about how our community are increasing their
            membership income and lot&apos;s more.
          </p>

          <div className="flex flex-wrap items-center justify-center xl:gap-6 gap-x-6 gap-y-28 mt-12">
            <div className="relative">
              <Image
                src="/image-2.png"
                alt="Image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[23rem] h-[18rem]"
              />

              <div className="absolute -bottom-16 mx-6 p-4 rounded-xl bg-primary-silver dark:bg-slate-900 shadow-xl flex flex-col items-center gap-4">
                <h3 className="text-primary-grey text-xl text-center font-bold text-foreground/80">
                  Creating Streamlined Safeguarding Processes with OneRen
                </h3>
                <a
                  href="#"
                  className="flex items-center text-primary-brand font-bold text-lg gap-2"
                >
                  Readmore
                  <span>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                        stroke="#4CAF4F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/image-3.png"
                alt="Image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[23rem] h-[18rem]"
              />

              <div className="absolute -bottom-16 mx-6 p-4 rounded-xl bg-primary-silver dark:bg-slate-900 shadow-xl flex flex-col items-center gap-4">
                <h3 className="text-primary-grey text-xl text-center font-bold dark:text-foreground/80">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </h3>
                <a
                  href="#"
                  className="flex items-center text-primary-brand font-bold text-lg gap-2"
                >
                  Readmore
                  <span>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                        stroke="#4CAF4F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/image-4.png"
                alt="Image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[23rem] h-[18rem]"
              />

              <div className="absolute -bottom-16 mx-6 p-4 rounded-xl bg-primary-silver dark:bg-slate-900 shadow-xl flex flex-col items-center gap-4">
                <h3 className="text-primary-grey text-xl text-center font-bold dark:text-foreground/80">
                  Revamping the Membership Model with Triathlon Australia
                </h3>
                <a
                  href="#"
                  className="flex items-center text-primary-brand font-bold text-lg gap-2"
                >
                  Readmore
                  <span>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                        stroke="#4CAF4F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-44 bg-primary-silver dark:bg-slate-900 w-full">
          <div className="flex flex-col items-center mx-auto py-10">
            <h1 className="text-6xl font-semibold max-w-2xl text-center px-4">
              Pellentesque suscipit fringilla libero eu.
            </h1>
            <Button
              size="lg"
              className="bg-primary-brand h-12 hover:bg-primary-brand/80 mt-9 text-base font-normal dark:text-foreground"
            >
              Get a Demo
              <span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
