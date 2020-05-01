---
slug: cannot-use-rust-analyzer-on-vscode
date: 2020-04-22T20:00:23.467Z
title: VSCodeでrust-analyzerを使うと"rust-analyzer failed to load workspace"する
tags:
  - vscode
  - extension
  - rust
cover:
---

[ここらへん](https://github.com/rust-analyzer/rust-analyzer/issues/3032)によると、MacのGUIアプリにパスがうまく渡っていないことが原因のよう。ターミナルから開くとPATH変数が渡っている状態でアプリケーションを開くことが出来るので、簡単な解決策として、`code`コマンドでディレクトリを開き直すと解決する。
