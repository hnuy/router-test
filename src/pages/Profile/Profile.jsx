import { motion } from "framer-motion"
import "./Profile.css"

export default function Profile() {
  return (
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7">
          <div class="card p-3 py-4">
            <div class="text-center">
              <motion.div
                className="containerpeko"
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              />
            </div>
            <div class="text-center mt-3">
              <span>HA</span>
              <motion.div
                className="arrowContainer"
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              >
                🡩
              </motion.div>
              <span>HA</span>
              <motion.div
                className="arrowContainer"
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              >
                🡫
              </motion.div>
              <span>HA</span>
              <motion.div
                className="arrowContainer"
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              >
                🡭
              </motion.div>
              <span>HA</span>
              <motion.div
                className="arrowContainer"
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              >
                🡪
              </motion.div>
              <h5 class="mt-2 mb-0">Usada Pekora</h5>
              <span>兎田ぺこら</span>
              <div class="px-4 mt-1">
                <p class="fonts">
                  Japanese Virtual YouTuber associated with hololive, debuting
                  as part of its third generation of VTubers under the name of
                  "hololive Fantasy" (ホロライブファンタジー) alongside Uruha
                  Rushia, Shiranui Flare, Shirogane Noel and Houshou Marine.
                </p>
              </div>
              <ul class="social-list">
                <li>
                  <a href="https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ">
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/usadapekora_hololive">
                    <i class="fa fa-twitch"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/hashtag/%E5%85%8E%E7%94%B0%E3%81%BA%E3%81%93%E3%82%89">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <div class="buttons">
                <button class="btn btn-outline-primary px-4">Message</button>
                <button class="btn btn-primary px-4 ms-3">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
