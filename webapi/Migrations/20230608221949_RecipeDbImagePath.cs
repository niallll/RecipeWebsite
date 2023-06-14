using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RankingApp.Migrations
{
    /// <inheritdoc />
    public partial class RecipeDbImagePath : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageName",
                table: "Recipes",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageName",
                table: "Recipes");
        }
    }
}
