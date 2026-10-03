@media (max-width: 980px) {
  .admin-layout {
    grid-template-columns: 1fr;
  }

  .form-grid.two-col,
  .two-col,
  .three-col {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-header,
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .auth-card {
    padding: 22px 18px;
  }
}
