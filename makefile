create:
	@mkdir -p posts
	@FILENAME=posts/$(shell date +"%Y-%m-%d-%H-%M-%S").md; \
	echo "Creating $$FILENAME..."; \
	echo "ここに本文を書いていきます。" >> $$FILENAME; \
	echo "作成完了: $$FILENAME"
