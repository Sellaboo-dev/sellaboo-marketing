import styles from "./OpportunityPath.module.css";

const OPPORTUNITY_PATH =
  "M112 104 C265 54 380 112 332 215 C292 301 446 304 532 276 C632 244 645 348 560 391 C475 434 331 401 300 487 C269 573 403 628 586 598";

function SellabooMark() {
  return (
    <svg viewBox="0 0 42 42" aria-hidden="true">
      <rect x="1" y="1" width="40" height="40" rx="13" />

      <path d="M12.7 14.4h13.1c2.4 0 4 1.3 4 3.3 0 1.5-.9 2.6-2.4 3.2 1.8.5 2.9 1.8 2.9 3.6 0 2.4-1.9 4-4.8 4H12.7v-4.2h12c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1h-7.8c-2.9 0-4.8-1.6-4.8-3.9 0-1.8 1.1-3.1 2.8-3.6h-2.2v-4.4Z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M9.5 20v-6h5v6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ReplyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5h14v10H9l-4 4z" />
      <path d="M9 9h6M9 12h4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 12 4 4 8-9" />
    </svg>
  );
}

export function OpportunityPath() {
  return (
    <section
      id="how-it-works"
      className={styles.story}
      aria-label="An opportunity moving from estimate request to booked appointment"
    >
      <div className={styles.frame}>
        <div className={styles.label}>
          <span className={styles.liveDot} aria-hidden="true" />
          One opportunity, kept moving
        </div>

        <svg
          className={styles.pathSvg}
          viewBox="0 0 720 720"
          role="img"
          aria-label="The Sellaboo Opportunity Path"
        >
          <defs>
            <linearGradient
              id="opportunityPathGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#aaa5c9" />
              <stop offset="46%" stopColor="#6e679b" />
              <stop offset="100%" stopColor="#28ba88" />
            </linearGradient>
            <filter
              id="opportunitySoftGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="8" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="opportunityWideGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="16" />
            </filter>
          </defs>

          <path
            className={styles.pathShadow}
            d={OPPORTUNITY_PATH}
          />

          <path
            className={styles.pathBase}
            d={OPPORTUNITY_PATH}
          />

          <path
            className={styles.pathProgress}
            d={OPPORTUNITY_PATH}
          />
          <path
  id="opportunityMotionPath"
  d={OPPORTUNITY_PATH}
  fill="none"
  stroke="none"
/>

<circle
  className={styles.opportunityHalo}
  r="25"
  fill="#8179b4"
  opacity="0.18"
  filter="url(#opportunityWideGlow)"
>
  <animateMotion
    dur="9.5s"
    repeatCount="indefinite"
    rotate="auto"
  >
    <mpath href="#opportunityMotionPath" />
  </animateMotion>
</circle>

<circle
  className={styles.opportunityLight}
  r="8"
  fill="#ffffff"
  filter="url(#opportunitySoftGlow)"
>
  <animateMotion
    dur="9.5s"
    repeatCount="indefinite"
    rotate="auto"
  >
    <mpath href="#opportunityMotionPath" />
  </animateMotion>
</circle>

<circle
  className={styles.opportunityCore}
  r="4.5"
  fill="#e8e5ff"
>
  <animateMotion
    dur="9.5s"
    repeatCount="indefinite"
    rotate="auto"
  >
    <mpath href="#opportunityMotionPath" />
  </animateMotion>
</circle>
        </svg>

        <article className={`${styles.node} ${styles.requestNode}`}>
          <div
            className={`${styles.nodeIcon} ${styles.indigoIcon}`}
            aria-hidden="true"
          >
            <HomeIcon />
          </div>

          <div className={styles.nodeCopy}>
            <span>New estimate request</span>
            <strong>Air conditioner stopped cooling</strong>
            <small>Received 2 minutes ago</small>
          </div>
        </article>

        <article className={`${styles.node} ${styles.leadNode}`}>
          <div className={styles.avatar} aria-hidden="true">
            JM
          </div>

          <div className={styles.nodeCopy}>
            <span>New lead</span>
            <strong>Jordan Miller</strong>
            <small>Ready for follow-up</small>
          </div>

          <em>New</em>
        </article>

        <article className={`${styles.node} ${styles.sellabooNode}`}>
          <div className={styles.sellabooHalo} aria-hidden="true" />

          <div className={styles.brandOrb} aria-hidden="true">
            <SellabooMark />
          </div>

          <div className={styles.nodeCopy}>
            <span>Sellaboo</span>
            <strong>Follow-up is active</strong>
            <small>Every next step stays visible</small>
          </div>
        </article>

        <article className={`${styles.node} ${styles.followupNode}`}>
          <div className={styles.messageStack} aria-hidden="true">
            <span
              className={`${styles.messageCard} ${styles.messageCardBack}`}
            />

            <span
              className={`${styles.messageCard} ${styles.messageCardFront}`}
            >
              <MailIcon />
            </span>
          </div>

          <div className={styles.nodeCopy}>
            <span>Consistent follow-up</span>
            <strong>The conversation keeps moving</strong>
            <small>Sent automatically, monitored clearly</small>
          </div>

          <em>Sent</em>
        </article>

        <article className={`${styles.node} ${styles.responseNode}`}>
          <div
            className={`${styles.nodeIcon} ${styles.greenIcon}`}
            aria-hidden="true"
          >
            <ReplyIcon />
          </div>

          <div className={styles.nodeCopy}>
            <span>Lead replied</span>
            <strong>“Tomorrow afternoon works.”</strong>
            <small>Your team knows when to step in</small>
          </div>
        </article>

        <article className={`${styles.node} ${styles.bookedNode}`}>
          <div className={styles.successRing} aria-hidden="true">
            <CheckIcon />
          </div>

          <div className={styles.nodeCopy}>
            <span>Appointment booked</span>
            <strong>Estimate scheduled</strong>
            <small>Tomorrow · 2:30 PM</small>
          </div>

          <em>Booked</em>
        </article>

        <div className={styles.caption}>
          <span aria-hidden="true" />

          <p>
            Sellaboo helps every opportunity keep moving toward a
            clear next step.
          </p>
        </div>
      </div>
    </section>
  );
}
