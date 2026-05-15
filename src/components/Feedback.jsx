import { useState } from 'react'
import './Feedback.css'
import { translations } from '../data/translations'
import { supabase } from '../lib/supabaseClient'

function Feedback({ lang, onClose }) {
  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')
  const [sent, setSent] = useState(false)

  const t = (key) => translations[lang]?.[key] || key

  const googleReviewUrl = 'https://g.page/r/CehYhcJPgXTnEBM/review'

 const handleSubmit = async () => {
  if (!rating) return

  const { error } = await supabase
    .from('menuria_feedback')
    .insert([
      {
        rating,
        comment,
        lang,
        page: window.location.pathname
      }
    ])

  if (error) {
    console.error('Feedback error:', error)
    return
  }

  setSent(true)
  setRating('')
  setComment('')
}

  return (
    <div className="feedback-overlay">
      <section className="feedback-section feedback-modal">
        <button
          type="button"
          className="feedback-close"
          onClick={onClose}
          aria-label="Close feedback popup"
        >
          ×
        </button>

        <div className="feedback-card">
          <span className="feedback-kicker">
            {t('feedback_kicker')}
          </span>

          <h2>{t('feedback_title')}</h2>

          <p className="feedback-text">
            {t('feedback_text')}
          </p>

          <div className="feedback-emojis">
            <button
              type="button"
              className={rating === 'happy' ? 'selected happy' : ''}
              onClick={() => setRating('happy')}
            >
              😊
              <span>{t('feedback_happy')}</span>
            </button>

            <button
              type="button"
              className={rating === 'neutral' ? 'selected neutral' : ''}
              onClick={() => setRating('neutral')}
            >
              😐
              <span>{t('feedback_neutral')}</span>
            </button>

            <button
              type="button"
              className={rating === 'sad' ? 'selected sad' : ''}
              onClick={() => setRating('sad')}
            >
              😞
              <span>{t('feedback_sad')}</span>
            </button>
          </div>

          <textarea
            placeholder={t('feedback_placeholder')}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <div className="feedback-actions">
            <button
              type="button"
              className="send-feedback-btn"
              onClick={handleSubmit}
            >
              {t('feedback_send')}
            </button>

            <a
              className="google-review-btn"
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('feedback_google')}
            </a>
          </div>

          {sent && (
            <p className="feedback-success">
              {t('feedback_success')}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Feedback