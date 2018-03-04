class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def create
    @post = Post.create(post_params)
    render json: @post
  end

  private

    def post_params
      params.require(:post).permit(
        :title,
        :body
      )
    end
end
